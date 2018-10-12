import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

export default class LikedRecipes extends Component {
  static propTypes = {
    likedRecipes: PropTypes.array,
  }

  render() {
    return (
      <React.Fragment>
        {recipes.map(recipe => {
          if (this.props.likedRecipes.includes(recipe.RezeptID)) {
            return <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
          } else {
            return null
          }
        })}
      </React.Fragment>
    )
  }
}
