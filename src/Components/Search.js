import React, { useState, useEffect } from "react";


const Search = () => {
  const [card, setCard] = useState([
    // Your initial card data here...
    {
        id: 7,
        Title: "Amrood (Guava)",
        image:
          "https://fpsstore.in/cdn/shop/products/green-guava-500x500_360x.png?v=1641460793",
        price: 60,
        delet: "100",
        grame: "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "ddffg",
      },
      {
        id: 8,
        Title: "Custard Apple",
        image:
          "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
        price: 180,
        delet: "200",
        grame: "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "qwe",
      },
      {
        id: 8,
        Title: "Custard Apple",
        image:
          "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
        price: 180,
        delet: "200",
        grame: "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "qwe",
      },
      {
        id: 8,
        Title: "Custard Apple",
        image:
          "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
        price: 180,
        delet: "200",
        grame: "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "qwe",
      },
      {
        id: 8,
        Title: "Custard Apple",
        image:
          "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
        price: 180,
        delet: "200",
        grame: "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "qwe",
      },
  ]);

  const [contact, setContact] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)

  useEffect(() => {
    const filteredContact = card.filter((item) => {
      const Title = item.Title.toLowerCase();
      const query = searchTerm.toLowerCase();

      // Check if either Title or price (as a string) contains the query
      return Title.includes(query);
    });
    
    setContact(filteredContact);
    console.log(filteredContact)
  }, [searchTerm, card]);

  // Rest of your code...

  return (
    <>
      <div className="container">
        {/* Your JSX code... */}
      </div>

      <h1 className="heading">Search App</h1>
      <input
        type="text"
        placeholder="search"
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      {/* Rest of your JSX code... */}
    </>
  );
};

export default Search;
