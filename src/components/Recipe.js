import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  }
  render() {
    const { recipe } = this.props
    return (
      <div data-test-id="Recipe-complete">
        <h1>{recipe.RezeptName}</h1>
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