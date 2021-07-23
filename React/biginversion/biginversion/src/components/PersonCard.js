
import React  from 'react';


const PersonCard = props => {
    
        const { firstName, lastName, age, haircolor } = this.props;
        return(
            <div className= "a1">
               <h1>{firstName} ,{lastName}</h1>
               <h5>Age: {age}</h5>
               <h5>Hair Color: {haircolor}</h5>
            </div>
        );
    }

export default PersonCard;