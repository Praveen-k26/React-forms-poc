import React, {Component} from 'react';
import Review from './Review';
import PropTypes from 'prop-types';



class Request extends Component{
    constructor(props){
        super(props);

        this.state = {
            
                name: props.name,
                number: props.number,
             
            newForm: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let name = this.refs.name.value;
        let number = this.refs.number.value;
        this.setState({name, number, newForm: ' '});
        this.refs.name.value = '';
        this.refs.number.value = '';
        
    }

    getContent(event) {
         
        this.props.callback(this.refs.name.value);
            console.log(this.refs.name.value)
        }

    getNumber(event) {

        this.props.Request(this.refs.number.value);
            console.log(this.refs.number.value)
    }

    render(){

            
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <h5>Name:</h5>
                    <input
                     autoComplete = 'off'
                     type= "text"
                     ref= 'name'
                     placeholder = 'Enter your name'
                     onChange={this.getContent.bind(this)}
                     value= {this.state.name}
                     
                     />

                    <h5>Number:</h5>
                    <input
                     autoComplete = 'off'
                     type= 'text'
                     ref= 'number'
                     placeholder= 'enter a number'
                     onChange={this.getNumber.bind(this)}
                     value= {this.state.number}
                     />

                   <div>
                      <button type = "submit" >SUMBIT </button>
                  </div> 
                </form>
                <h4>This is a request component</h4>
                <div>
                
                </div>
                
            </div>
        );
        Request.protoTypes = {
            callback : PropTypes.func,
            }
    }
}


export default Request;