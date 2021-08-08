import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'
import Authorscomponents from '../components/Authorscomponents';

export default props => {
    const {id} = props
    const [author,setauthor] = useState()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            setauthor(res.data);
            setLoaded(true);
        })
    }, []);
    const updateAuthor = (prod) => {
        axios.put(`http://localhost:8000/api/edit/${id}`, prod)
        .then(res => console.log(res));
    }


    return (
            <>    
            <h1>Faviourte Author</h1>
            <Link to={"/"}>Home</Link>
            {loaded && (
                <div>
                    <Authorscomponents 
                    onSubmitProp={updateAuthor}
                    initialName={author.Name}/>
                </div>)}
</>
        
    )
}
