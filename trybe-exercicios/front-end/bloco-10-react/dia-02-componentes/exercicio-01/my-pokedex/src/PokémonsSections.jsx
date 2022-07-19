import React from 'react';
import PokemonCards from './PokemonCards';
import PropType from 'prop-types';


class PokemonsSection extends React.Component {
  render () {
    const {pokemons} = this.props;
    return (
      <section className='cards-list' key={pokemons.id}>
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <PokemonCards pokemon={pokemon} />
            </div>
          ) 
        })}
      </section>
    ) 
  }
}

PokemonsSection.propType = {
  pokemons: PropType.arrayOf(PropType.object).isRequired,
}

export default PokemonsSection;
