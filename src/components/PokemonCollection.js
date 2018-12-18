import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
    pokemonDetail = () => {
      return this.props.pokedex.map((p) =>{
        let indexPO = p.stats.indexOf("hp")
        let stats = p.stats.slice(indexPO)
        let hp = stats[0].value
 // ALTERNATIVE WAY TO FIND HP:
        // let hpStat = p.stats.find(stat => stat["name"] === "hp") // {name: "hp", value: 60}
        // let hp = hpStat.value
         return <PokemonCard key={p.id} name={p.name} frontPic={p.sprites.front} backPic={p.sprites.back} hp={hp} />
      })
    }


  render() {
    console.log("props are: ", this.props);
    return (
      <Card.Group itemsPerRow={6}>
        <br/>
        {this.pokemonDetail()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
