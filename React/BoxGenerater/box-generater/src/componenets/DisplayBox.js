import React from 'react'
import '../App.css';

function DisplayBox(props) {
    return (
        <div style={{display:'flex',padding:"5px"}}>
            {props.o.map((item,i)=> {
                return(
                <div  style={{background:item,width:"300px",height:"300px", margin:"5px"}}>

                </div>
                )
            }
            )}
        </div>
    )
}

export default DisplayBox; 
