import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Pepole=(props)=> {
    const [people, setPeople] = useState([]);
 
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+props.id)
            .then(response => setPeople(response.data))
    }, [props.id]);
    return (
        <div>
            <h1>{people.name}</h1>
            <p>{people.height}</p>
            <p>{people.mass}</p>
            <p>{people.hair_color}</p>
            <p>{people.skin_color}</p>
        </div>
    )
}

export default Pepole
