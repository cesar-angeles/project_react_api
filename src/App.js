import React from 'react';
import Home from './components/PokemonHomeList';
import About from './components/About';
import PokemonSearch from './components/PokemonPage'
import './css/Navbar.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
 
  return (
    <Router >
        <div >
            <nav>
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                
                    <li><Link to='/pokemon'>Pokedex</Link></li>

                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/pokemon' element={<PokemonSearch />}/>
            </Routes>
        </div>
    </Router>

    
);
}

export default App;
