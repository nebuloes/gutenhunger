import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  }
  render() {
    const { recipe } = this.props
    return (
      <div data-test-id="Recipe-card">
        <h1>{recipe.RezeptName}</h1>
      </div>
    )
  }
}
