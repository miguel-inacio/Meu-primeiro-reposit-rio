import React from 'react';
import pokemons from './data';
import PokemonsSection from './PokémonsSections';
import './style.css';

function App() {
  return (
    <main className='main'>
      <header className='title'>
        <h1>Pokedex</h1>
      </header>
      <div className='container'>
        <PokemonsSection pokemons={pokemons}/>
      </div>
    </main>
  );
}

export default App;
