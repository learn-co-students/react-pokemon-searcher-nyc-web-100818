import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokeData: [],
    searched: ""
  }


  componentDidMount(){
    fetch(`http://localhost:3000/pokemon`)
    .then(r => r.json())
    .then(poke => this.setState({pokeData: poke}))
    // , ()=> {console.log("LOGGED", this.state.pokeData)}
  }

  handleChange = (event) => {
    // debugger
    let input = event.target.value
    this.setState({
      searched: input
    })
    // , () => console.log("state is: ", this.state.searched)
    // let updatedPokedata = this.state.pokeData.filter((e) => {
    //   return e.name.includes(event.target.value) })
    // // console.log("UPDATED", updatedPokedata)
    // this.setState({pokeData: updatedPokedata})
  }

filteredPokes = () => {
  return this.state.pokeData.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searched.toLowerCase()))
}


newPoke = (obj) => {
  // let addedPoke = obj
  // console.log({...this.state.pokeData, obj})
  // debugger
  // let addedPoke = this.state.pokeData
  // addedPoke.push(obj)
  // // debugger
  // this.setState({...this.state, pokeData: addedPoke}, ()=>console.log("updated state", this.state.pokeData, "STATE IS", this.state))
  fetch(`http://localhost:3000/pokemon`, {method: "POST",
    headers: {
      "Content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(
      {"name": obj.name,
      "stats": [
        {
          "value": obj.hp,
          "name": "hp"
        }
      ],
      "sprites": {
        "front": obj.frontUrl,
        "back": obj.backUrl
      }}
    )
  }).then(r => r.json())
  .then(obj => this.setState({pokeData: [...this.state.pokeData, obj]}))
  // addedPoke = {name: pokeState.name, hp: pokeState.hp, frontUrl: pokeState.frontUrl, backUrl:pokeState.backUrl}
}


  render() {
    // let filteredPokes = this.state.pokeData.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searched.toLowerCase()))
    // console.log("filtered pokemon are: ", this.filteredPokes())
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event)=>this.handleChange(event)} value={this.state.searched} open={false} />
        <br />
        <PokemonCollection pokedex={this.filteredPokes()}/>
        <br />
        <PokemonForm newPoke={this.newPoke}/>
      </div>
    )
  }
}

export default PokemonPage
