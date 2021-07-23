import React, {useState} from 'react'
import '../App.css';

function BoxForm(props) {
    const [color, setcolor] = useState("")
    const arr=[];
    const   showcolor=(e) => {
    e.preventDefault();
    arr.push(color);
    props.lift(arr);
    }
    return (
        <div>
            <form onSubmit={showcolor}>
                <h1>Color</h1>
                <input type="text" onChange={(e)=>setcolor(e.target.value)}/>
                <input  type="submit" value="Add"/>
            </form>
        </div>
    )
}
export default BoxForm;