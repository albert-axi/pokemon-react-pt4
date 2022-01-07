import { Link } from 'react-router-dom'

function PokeCard({pokemon}) {
    return (
      <Link to={`/pokedex/${pokemon.name}`} >
      <div className="PokeShow">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
  </Link>
    );
  }
  
  export default PokeCard;