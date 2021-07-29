import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import banner from './img/banner.jpg';

function App() {
  return (
    <div className="App">
     <img scr={banner} alt="banner"/>
     <NavBar/>
    </div>
  );
}

export default App;
