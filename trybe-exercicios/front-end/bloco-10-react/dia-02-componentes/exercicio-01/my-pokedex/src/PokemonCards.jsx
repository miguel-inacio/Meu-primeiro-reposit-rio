import React from 'react';
import banana from 'prop-types';

class PokemonCards extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const { value, measurementUnit } = averageWeight;
    return (
      <section className='card'>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <div>
          <img src={image} alt={name} />
        </div>
      </section>
    )
  }
}

PokemonCards.propTypes = {
  pokemon: banana.shape({
    name: banana.string,
    type: banana.string,
    averageWeight: banana.shape({
      value: banana.number,
      measurementUnit: banana.string,
    }),
    image: banana.string,
  }).isRequired,
}

export default PokemonCards;
