import React from 'react';
import Weather from './Weather';
import "./index.css"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="icon">
      <Weather defaultCity="London"/>
      <footer>
      This project was coded by Abuk Sedonia and it is {""}
      <a href="https://github.com/Abuk974/speed-my-app?" target="blank"> 
      open-sourced on GitHub
      </a>
      </footer>
      </div>
      </div>
    </div>
  );
}

export default App;
