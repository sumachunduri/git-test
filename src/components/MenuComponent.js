import React, { Component } from 'react';
import { Media } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
          
          
        }
        console.log('Menu Component Constructor is invoked')
    }
    componentDidMount(){
      console.log('Menu Component DidMount is invoked')
    }

    onDishSelect(dish){
          this.setState({selectedDish:dish});
         
    }
    
  


    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle><h4>{dish.name}</h4></CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        
        console.log('Menu Component render is invoked')

        return (
          <div className="container">
          
            <div className="row">
                  {menu}  
            </div>
            
            <div>
                 
               
                <DishDetail dd={this.state.selectedDish} />
              
             </div>
          </div>  
                 
        )}
 }

export default Menu;