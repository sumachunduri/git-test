import React from 'react';
import  { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';



class App extends Component {


  render() {
    return (
     
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    
    );
  }
}

export default App;
