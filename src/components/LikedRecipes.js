import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

export default class LikedRecipes extends Component {
  static propTypes = {
    likedRecipes: PropTypes.array,
  }

  render() {
    return recipes.map(
      recipe =>
        this.props.likedRecipes.includes(recipe.RezeptID) ? (
          <RecipeCardContainer recipe={recipe} />
        ) : (
          <div />
        )
    )
  }
}
