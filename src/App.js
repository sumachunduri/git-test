import React from 'react';
import  { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { combineForms } from 'react-redux-form';

import DishDetail from './components/DishDetailComponent';

const store = ConfigureStore();



class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
    
    );
  }
}

export default App;
