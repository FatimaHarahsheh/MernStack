import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialName, onSubmitProp } = props;
    const [Name, setName] = useState(initialName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({Name});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label> Name</label><br />
                <input 
                    type="text" 
                    name="Name" value={Name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            
            <input type="submit" />
        </form>
    )
}
