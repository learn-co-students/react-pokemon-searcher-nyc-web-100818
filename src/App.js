import React from "react";
import PokemonIndex from "./components/PokemonIndex";
import "./App.css";

// App Component is responsible for:
// 1. Rendering PokemonIndex component
const App = () => (
  <div className="App">
    <PokemonIndex />
  </div>
);

export default App;
