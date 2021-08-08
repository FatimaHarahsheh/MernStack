import React from 'react'
import axios from 'axios';
export default props => {
    const { authorId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/delete/' + authorId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}
