import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

// PokemonCollection component is presentational and responsible solely for rendering a list of pokemons
// We can turn this into a functional component for cleaner code
// Takes in two arguments pokemon and toggleImage as props

const PokemonCollection = ({ pokemon, toggleImage }) => (
  <Card.Group itemsPerRow={6}>
    {pokemon.map(pokemon => (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        toggleImage={toggleImage}
      />
    ))}
  </Card.Group>
);

export default PokemonCollection;
