import React, { Component } from 'react'
import { CardImg, CardBody, Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Label, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
export class CommentForm extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(formData){
        alert('Current State : '+ JSON.stringify(formData))
        console.log('Current State: '+ JSON.stringify(formData))
    }

    render(){
        return(
            <div>
            <Button color="outline-secondary" onClick={this.toggleModal}><span className="fa fa-pencil"> Submit Comment </span></Button> 

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>

                    <LocalForm onSubmit={(formData) => this.handleSubmit(formData)}>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label></Row><Row>
                                <Col md={12}>
                                    <Control.select model=".rating" className="form-control" id="rating" name="rating" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="YourName" md={2}>YourName</Label></Row>
                                <Row>
                                <Col md={12}>
                                    <Control.text model=".YourName" id="YourName" name="YourName"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                         />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label></Row>
                                <Row>
                                <Col md={12}>
                                    <Control.textarea model=".comment" className="form-control" id="comment" name="comment" rows="6" />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={2}>
                                    <Button type="submit" color="primary"> Submit </Button>
                                </Col>
                            </Row>

                    </LocalForm>                   

                </ModalBody>
            </Modal>
            </div>
        )
    }

}


function RenderDish({dish}){
    return(
        <Card className="col-12 col-md-5 m-1">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    )
}

function RenderComments({comments}){

    console.log(comments)
    if(comments != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <h2>Comments</h2> 
                <ul className="list-unstyled">
                    {
                        comments.map((comment) => {
                            return(
                                <div key={comment.id}>
                                    <li>{comment.comment}</li>
                                    <li className="pb-2 pt-2">-- {comment.author} , {new Intl.DateTimeFormat('en-US',{year: 'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>    
                                </div>
                            )   
                        })
                    }
                </ul>

                <CommentForm />

            </div>
        )
    }else{
        return(
            <div></div>
        )
    }

}

const DishDetail = (props) => {
    if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        )
    }
}

export default DishDetail