import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  findHpOfPokemon = () => {
    return this.props.pokemon.stats.find(stat => stat.name === "hp").value;
  };

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHpOfPokemon()}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
