import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Pokedex from './pages/Pokedex';
import NavBar from './components/NavBar';
import PokeShow from './components/PokeShow';
import { ThemeContext, themes } from './contexts/ThemeContext';
import { PokemonContextProvider } from './contexts/PokemonContext'
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import { UserContextProvider } from './contexts/UserContext'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <PokemonContextProvider>
          <ThemeContext.Provider value={themes.dark}>
            <NavBar />
          </ThemeContext.Provider >
          <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/about' component={AboutPage} />
              <Route path='/pokedex' exact component={Pokedex} />
              <Route path='/pokedex/:pokeName' component={PokeShow} />
              <Route path='/signup' exact component={SignupForm} />
              <Route path='/login' exact component={LoginForm} />
          </Switch>
        </PokemonContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
