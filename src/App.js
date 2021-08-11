import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import banner from './img/imgBody.png'
import ItemListContainer from './components/itemListContainer.js';
import CardContainer from './components/CardContainer.js';

function App() {

  
   return (
    <div className="App">
     <img scr={banner} alt="banner"/>
     <NavBar/>
      <ItemListContainer/>
     <CardContainer/>
    
    </div>
  );
}

export default App;
