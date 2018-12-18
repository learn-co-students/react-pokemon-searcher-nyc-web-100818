import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokeData: [],
    term: '',
    filteredPokemon: []
  }
  
  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(pD => {
        const data = pD.map(p => ({...p, flipped:false}))
        this.setState({ pokeData: data })
      })
  }

  displayImage = (id) => {
    const pokemon = this.state.pokeData.find(p => id === p.id)
    
    return pokemon.flipped === false ? pokemon.sprites.front : pokemon.sprites.back
  }

  handleToggle = (id) => {
    const newData = this.state.pokeData.map( p => {
      if (p.id === id)  {
        return {...p, flipped:!p.flipped}
      } return p
    })

    this.setState({ pokeData: newData })
  }

  handleSearch = (event) => {
    this.setState({ term: event.target.value })
  }

  addPokemon = (poke) => {
    this.setState({
      pokeData: [poke, ...this.state.pokeData]
    })
  }

  render() {
    const filteredPokemon = this.state.pokeData.filter(p => {
      return p.name.toLowerCase().includes(this.state.term.toLowerCase())
    })

    return (
      <div>
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} open={false} />
        <br />
        <PokemonCollection pokeData={filteredPokemon} toggle={this.handleToggle} displayImage={this.displayImage} />
      </div>
    )
  }
}

export default PokemonPage
