import { createContext, useState } from "react";

const PokemonContext = createContext(null);

const PokemonContextProvider = props => {

    const [pokemonArray, setPokemonArray] = useState([]);

    return(
        <PokemonContext.Provider value={[pokemonArray, setPokemonArray]}> 
            {props.children}
        </PokemonContext.Provider>
    )
}

export { PokemonContext, PokemonContextProvider }