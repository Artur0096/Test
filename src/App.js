import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Leftsidebar from "./components/leftSidebar/leftSidebar.js"
import Content from "./components/content/content.js"
import Footer from "./components/footer/footer.js"


function App() {
  return (
    <div>
      <div className="App">
        <Leftsidebar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
