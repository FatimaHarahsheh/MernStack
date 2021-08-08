import React,{useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'
import Authorscomponents from '../components/Authorscomponents'
const Create = () => {
    const [author, setauthor] = useState([])
    const createauthor = Author =>{
        axios.post('http://localhost:8000/api/new',Author)
        .then(res=>{setauthor([...author,res.data])})}
    return (
        <div>
            <h1>Faviourte author</h1>
            <Link to="/">home</Link>
            <Authorscomponents onSubmitProp={createauthor} initialName="" />
        </div>
    )
}

export default Create
