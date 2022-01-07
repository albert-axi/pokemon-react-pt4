import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

function NavBar() {

    const theme = useContext(ThemeContext)

    return (
        <div className="NavBar">
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={theme}
            >Home</NavLink>
            <NavLink
                to="/about"
                exact
                style={link}
                activeStyle={theme}
            >About</NavLink>
            <NavLink
                to="/pokedex"
                exact
                style={link}
                activeStyle={theme}
            >Pokedex</NavLink>
        </div>
    );
}

export default NavBar;