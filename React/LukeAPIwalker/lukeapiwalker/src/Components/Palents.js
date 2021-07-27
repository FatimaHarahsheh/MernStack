import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Palents=(props)=> {
    const [plantes, setplantes] = useState([]);
 
    useEffect(() => {
        axios.get('https://swapi.dev/api/plantes/'+props.id)
            .then(response => setplantes(response.data))
    }, [props.id]);
    return (
        <div>
            <h1>{plantes.name}</h1>
            <p>{plantes.climate}</p>
            <p>{plantes.terrain}</p>
            <p>{plantes.surface_water}</p>
            <p>{plantes.population}</p>

        </div>
    )
}
export default Palents