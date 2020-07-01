import React from 'react';
import  { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Header from './HeaderComponent'; 
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent'; 
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';


class Main extends Component {

    constructor(props) {
      super(props);
      this.state = {
        dishes: DISHES
        
      };
    }
  
  

  render() {
    const HomePage = () =>{
      return(
        <Home />
      )
  
    }
    return (
      <div className="App">
        <Header />
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;