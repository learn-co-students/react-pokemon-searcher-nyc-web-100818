import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: '',
      flipped: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>console.log(this.state.hp))
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        stats: [0, 1, 2, 3, 4, {
          "value": this.state.hp,
          "name": "hp"
        }],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl
        },
        flipped: this.state.flipped
      })
    })
      .then(r=>r.json())
      .then(p => this.props.addPokemon(p))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
