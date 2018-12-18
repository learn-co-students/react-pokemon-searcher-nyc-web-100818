import React from "react";
import { Card } from "semantic-ui-react";

const PokemonCard = props => {
  
  return (
    <Card>
      <div onClick={()=>props.toggle(props.pokemon.id)}>
        <div className="image">
          <img src={props.displayImage(props.pokemon.id)} alt={props.pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{props.pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.pokemon.stats[5].value}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard;
