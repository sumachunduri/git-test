import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';


class DishDetail extends Component {
    
 renderDish(dish){
     
    if(dish!=null){
      return(
      <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
               <CardTitle><h4>{dish.name}</h4></CardTitle>
               <CardText>{dish.description}</CardText>
              
          </CardBody>
      </Card>
      
      
      )
    }
    else{
      return(
        <div></div>
      )
    }
  }

  renderComments(comments){
   
 
    if(comments!=null){
      return(
        <div>
          <h4>Comments</h4>
         {comments.map((dish) => (
           <div key={dish.id} >
          <div className="col-10"> 
          <p></p>
              {dish.comment}
                </div>
                <p></p>
                 <div className="col-10">-- {dish.author}, {new Intl.DateTimeFormat('en-US',{ year : 'numeric' , month : 'long' , day : '2-digit' }).format(new Date(dish.date))}
                  </div>
               </div>
              

           
         ))
      }
         </div>
    
         );
    }
        
        else{
          return(
            <div></div>
          )
        }
 
}
 render(){
     return(
     
<div className="row">
  
    <div className="col-md-5 m-1">
    {this.renderDish(this.props.dd)}

    </div> 
<div className="col-md-5 m-1">
{this.renderComments(this.props.dd ? this.props.dd.comments : null)}

</div> 

</div>

);}
    
}

export default DishDetail;