import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const URL = "http://localhost:3000/pokemon";

const API = "http://localhost:3000/pokemon/"

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    term: ""
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(pokeData => this.setState(
      { pokemon: pokeData }
    ))
  }

  handleSearch = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(poke => poke.name.includes(this.state.term));
  }

  addPokemon = (newPoke) => {
    this.setState({
      pokemon: [...this.state.pokemon, newPoke]
    })
  }

  render() {
    console.log("this is the state of pokemon", this.state.pokemon);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} value={this.state.term} />
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
