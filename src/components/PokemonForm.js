import React from 'react'
import { Form } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon/"

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleInput = (event) => {

    const searchName = event.target.name
    const searchValue = event.target.value

    this.setState({
      [searchName]: searchValue
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {name, hp, frontUrl, backUrl} = this.state

    fetch(API, { method: 'POST',
      body: JSON.stringify({
        name: name,
        stats: [{value: hp, name: "hp"}],
        sprites: {front: `${frontUrl}` , back: `${backUrl}` }
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(newPoke => {
      this.props.addPokemon(newPoke);
    })

  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleInput} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleInput} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleInput} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleInput} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
