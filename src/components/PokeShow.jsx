import { useParams } from "react-router-dom";
import { PokemonContext } from "../contexts/PokemonContext";
import { useContext, useState, useEffect } from 'react'


function PokeShow() {

    const {pokeName} = useParams()
    const [pokemon, setPokemon] = useState(null)

    const fetchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(res=>res.json())
        .then(data=>setPokemon(data))
    }

    useEffect(()=>{
        const findPokemon = pokemonArray.find(({name}) => name === pokeName)
        if(!findPokemon) fetchPokemon(pokeName)
        if(findPokemon) setPokemon(findPokemon)
        
        // if(!findPokemon) fetchPokemon(pokeName)
        // else setPokemon(findPokemon)
        
    }, [])

    const [pokemonArray, setPokemonArray] = useContext(PokemonContext)
    return (
        <div className="PokeCard">
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
            Types: {pokemon?.types.map( t => t.type.name).join(", ")}
        </div>
    );
}

export default PokeShow;