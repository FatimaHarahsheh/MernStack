import React,{useState} from 'react' ;
import { navigate } from '@reach/router';
// import Button from '@material-ui/core/Button';
const MyComponents=(props)=> {
    const [choice, setchoice] = useState("people");
    const [id, setid] = useState(3);

    const changer=(event)=>{
        setchoice(event.target.value);
    }
    const changerid=(event)=>{
        setid(event.target.value);
    }
    const tosendda=(event)=>{
        event.preventDefault();
        navigate('/' + choice + '/' + id)
    }
    return (
        <div>
            <form onSubmit={tosendda}>
                <label>Search for :</label>
                <select name="option" onChange={changer}>
                      <option value="people">People</option> 
                      <option value="plantes">Plantes</option> 
                </select>
                <label>ID :</label>
                <input type="number" name="id"  onChange={changerid}></input>
                {/* <Button onClick={()=>tosendda()} variant="contained" color="primary">Search</Button> */}
                <input type="submit"  value="Search"/>
            </form>
        </div>
 )
}
export default MyComponents