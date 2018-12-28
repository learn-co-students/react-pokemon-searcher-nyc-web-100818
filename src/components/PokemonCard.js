import React from "react";
import { Card } from "semantic-ui-react";

// PokemonCard component is responsible solely for rendering the individual Pokemon Card
// Turn this into functional component

const PokemonCard = ({ pokemon, toggleImage }) => {
  // destructure props.pokemon
  const { name, stats, sprites, isClicked } = pokemon;
  const imgURL = isClicked ? sprites.back : sprites.front;
  const hp = stats.find(stat => stat.name === "hp").value;

  return (
    <Card>
      <div onClick={() => toggleImage(pokemon)}>
        <div className="image">
          <img src={imgURL} alt="RIP" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
};

// class PokemonCard extends React.Component {
//   findHpOfPokemon = () => {
//     return this.props.pokemon.stats.find(stat => stat.name === "hp").value;
//   };

//   render() {
//     return (
//       <Card>
//         <div>
//           <div className="image">
//             <img alt="oh no!" src={this.props.pokemon.sprites.front} />
//           </div>
//           <div className="content">
//             <div className="header">{this.props.pokemon.name}</div>
//           </div>
//           <div className="extra content">
//             <span>
//               <i className="icon heartbeat red" />
//               {this.findHpOfPokemon()}
//             </span>
//           </div>
//         </div>
//       </Card>
//     );
//   }
// }

export default PokemonCard;
