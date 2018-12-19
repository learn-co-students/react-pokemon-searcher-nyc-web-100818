import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state =  {
    spriteToggle: true
  }

  getHP() {
    const hpStat = this.props.pokemon.stats.find(obj => obj.name === "hp")
    return hpStat.value
  }

  dispImg() {
    return this.state.spriteToggle ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back
  }

  handleClick = (event) => {
    this.setState({
      spriteToggle: !this.state.spriteToggle
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.dispImg()} alt="oh no!" onClick={this.handleClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
