import React, { Component } from 'react'
import { recipes } from '../recipes.json'
import Recipe from './Recipe'

class App extends Component {
  render() {
    return (
      <div className="App">
        {recipes.map((recipe, i) => (
          <Recipe key={i} recipe={recipe} />
        ))}
      </div>
    )
  }
}

export default App
