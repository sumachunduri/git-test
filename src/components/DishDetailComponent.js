import React  from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';



    
 function RenderDish({dish}){
     
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

  function RenderComments({comments}){
   
 
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
                 <div className="col-10">-- {dish.author}, {new Intl.DateTimeFormat('en-US',{ year : 'numeric' , month : 'short' , day : '2-digit' }).format(new Date(Date.parse(dish.date)))}
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


  const  DishDetail = (props) => {
    if(props.dish != null){

    
     return(
     <div class="container">
<div className="row">
  
    <div className="col-md-5 m-1">
    <RenderDish dish={props.dish}  />

    </div> 
<div className="col-md-5 m-1">

<RenderComments comments={props.dish.comments}  />

</div> 

</div>
</div>
);
}
else{
  return(
    <div></div>
  )
}
}
    


export default DishDetail;