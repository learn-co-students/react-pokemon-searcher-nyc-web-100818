import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'


/// NOTE: CHANGED FROM FCN TO PURE COMPONENT

class App extends React.PureComponent{
    render(){
      return(
        <div className="App">
        <PokemonIndex />
        </div>
      )

    }
}

export default App
