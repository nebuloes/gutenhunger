import React, { Component } from 'react'
import { recipes } from '../recipes.json'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RecipeCard from './RecipeCard'

class App extends Component {

renderRecipeCards = () => {
  return (
    recipes.map((recipe, i) => (
    <RecipeCard key={i} recipe={recipe} /> 
    ))
  )
}

  render() {
    return (
      <Router>
      <div className="App">
      <Route exact path="/" render={this.renderRecipeCards} />
      <Route path="/recipe" render={this.renderRecipe} />
      </div>
      </Router>
    )
  }
}

export default App
