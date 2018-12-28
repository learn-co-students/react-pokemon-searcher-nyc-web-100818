import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const URL = "http://localhost:3000/pokemon";

// PokemonIndex component is responsible for:
// 1. Fetching data from backend database
// 2. Manages state => an array of pokemon objects
// 3. Renders three child components:
// a. Search
// b. PokemonCollection
// c. PokemonForm

class PokemonIndex extends React.Component {
  // initial state => key of pokemon is an empty array
  state = {
    pokemonCollection: [],
    searchTerm: ""
  };

  // initial data fetch from database, invokes when PokemonIndex first mounts
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemonCollection =>
        this.setState({ pokemonCollection: pokemonCollection })
      )
      .catch(e => console.error(e));
  }

  toggleImage = pokemon => {
    const current = this.state.pokemonCollection;
    const idx = current.indexOf(pokemon);
    this.setState({
      pokemonCollection: [
        ...current.slice(0, idx),
        { ...pokemon, isClicked: !pokemon.isClicked },
        ...current.slice(idx + 1)
      ]
    });
  };

  addPokemon = pokemon => {
    this.setState({
      pokemonCollection: [...this.state.pokemonCollection, pokemon]
    });
  };

  handleSearchChange = (event, { value }) => {
    this.setState({ searchTerm: value });
  };

  render() {
    const desiredPokemon = this.state.pokemonCollection.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
    );
    console.log("this is the state of pokemon", this.state.pokemon);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        {/* passing down state to PokemonCollection as props */}
        <PokemonCollection
          pokemon={desiredPokemon}
          toggleImage={this.toggleImage}
        />
      </div>
    );
  }
}

export default PokemonIndex;
