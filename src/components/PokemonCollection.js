import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = (props) => {
  
return (
    <Card.Group itemsPerRow={6}>
      {props.pokeData.map( p => {
        return <PokemonCard key={p.id} pokemon={p} toggle={props.toggle} displayImage={props.displayImage} />
      })}
    </Card.Group>
  )
}

export default PokemonCollection
