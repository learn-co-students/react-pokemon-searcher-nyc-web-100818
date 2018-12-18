import React from 'react'
import { Form } from 'semantic-ui-react'

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

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.newPoke(this.state)
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    // shortcut for below:
    // if (e.target.name==="name"){
    //   this.setState({name: e.target.value})
    // } else if (e.target.name === "hp"){
    //   this.setState({hp: e.target.value})
    // }
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group onChange={this.handleChange} widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
