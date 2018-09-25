import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Heart from './Heart'

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSave: PropTypes.func,
    onUnsave: PropTypes.func,
    likedRecipes: PropTypes.array,
  }
  render() {
    const { recipe, onSave, onUnsave, likedRecipes } = this.props
    const RezeptID = recipe.RezeptID
    const recipeIndex = likedRecipes.findIndex(recipe => recipe === RezeptID)
    return (
      <div data-test-id="Recipe-complete">
        <h1>
          {recipe.RezeptName}
          <Heart
            recipe={recipe}
            onSave={() => onSave(RezeptID)}
            onUnsave={() => onUnsave(recipeIndex)}
            likedRecipes={likedRecipes}
          />
        </h1>
        <h2>
          {recipe.SchwierigkeitsgradName}, {recipe.Minuten} Minuten
        </h2>
        <h3>Zutaten</h3>
        <ul>
          {recipe.Zutaten.split(',').map((zutat, i) => (
            <li key={i}>{zutat}</li>
          ))}
        </ul>
        <small>1 Portion</small>
        <div>{recipe.Zubereitung}</div>
      </div>
    )
  }
}
