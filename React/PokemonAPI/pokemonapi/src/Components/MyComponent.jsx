import React ,{ useState}from 'react'

const MyComponent = (props) => {
    const [pokemon,setPokemon]=useState([]);
    const butdisplay = ()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=0&offset=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
 
    };
    return (
        <div>
            <button onClick={butdisplay}    > Fetech Pokemon</button>
            <ul>
            {pokemon.length > 0 && pokemon.map(
                (pokemon,index)=>{
                    return (<li key={index}>{pokemon.name}</li>)
                }
            )}
            </ul>
        </div>
    )
}

export default MyComponent
