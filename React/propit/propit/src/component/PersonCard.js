import React, { Component } from 'react';


class PersonCard extends Component{
    render(){
        const { firstName, lastName, age, haircolor } = this.props;
        return(
            <div>
               <h1>{firstName} ,{lastName}</h1>
               <h5>Age: {age}</h5>
               <h5>Hair Color: {haircolor}</h5>
            </div>
        );
    }
}
export default PersonCard;
