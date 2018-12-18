import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  handleClick = (event) => {
    // debugger
    event.target.src === this.props.frontPic ? event.target.src = this.props.backPic : event.target.src = this.props.frontPic
  }

  render() {
    // console.log("POKECARD:",this.props);
    return (
      <Card>
        <div>

          <div onClick={(event)=> this.handleClick(event)} className="image">
            <img alt="oh no!" src={this.props.frontPic}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />

              {this.props.hp}

            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
