import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Views/Home/Home';
import Search from './Components/Search';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Home/>
  {/* <Search/> */}
  </>
);


reportWebVitals();
