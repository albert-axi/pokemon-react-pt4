import { useContext, useEffect } from 'react'
import PokeCard from '../components/PokeCard';
import { PokemonContext } from '../contexts/PokemonContext';

function Pokedex() {

    const [pokemonArray, setPokemonArray] = useContext(PokemonContext); // [pokemonArray, setPokemonArray]

    let timer
    const fetchPokemon = () => {
        console.log("fetchPokemon")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => res.json())
            .then(res => {
                res.results.forEach(pokemon=>fetchPokemonDetails(pokemon))
            })
    }

    const fetchPokemonDetails = (pokemon)=> {
        fetch(pokemon.url)
        .then(res=>res.json())
        .then(pokemon => setPokemonArray(prevState=>[...prevState, pokemon]))
    }

    useEffect(fetchPokemon, [])


    const renderPokeCards = ()=>{
        return pokemonArray.map((pokemon, index)=><PokeCard key={index} pokemon={pokemon} />)
    }

    return (
        <div className="Pokedex">
            <h1>Pokedex Page</h1>
            <div className="poke-list">
                {renderPokeCards()}
            </div>
        </div>
    );
}

export default Pokedex;