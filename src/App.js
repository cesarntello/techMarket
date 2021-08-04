import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import Banner from './img/banner.jpg';
import ItemListContainer from './components/itemListContainer.js';
function App() {
   return (
    <div className="App">
     <img scr={Banner} alt="banner"/>
     <NavBar/>
      <ItemListContainer/>
     
    </div>
  );
}

export default App;
