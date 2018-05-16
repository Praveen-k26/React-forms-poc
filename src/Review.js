import React, {Component} from 'react';
import Request from './Request';


class Review extends Component{
    render() {
        return (
            <div>
                
                <p>NAME : {this.props.name}</p>
                <p>Number : {this.props.number}</p>
            </div>
        );
    }
}


export default Review;