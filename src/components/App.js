import React, { Component } from 'react'
import { recipes } from '../recipes.json'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import RecipeCard from './RecipeCard'
import Recipe from './Recipe'

class App extends Component {
  renderRecipeCards = () => {
    return recipes.map(recipe => (
      <RecipeCard key={recipe.RezeptID} recipe={recipe} />
    ))
  }

  renderRecipe = ({ match }) => {
    const recipeID = Number(match.params.id)
    const foundRecipe = recipes.find(recipe => recipe.RezeptID === recipeID)
    return <Recipe recipe={foundRecipe} />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={this.renderRecipeCards} />
          <Route path="/recipe/:id" render={this.renderRecipe} />
        </div>
      </Router>
    )
  }
}

export default App
