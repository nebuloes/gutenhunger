import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
        <Link data-test-id="Link-to-index" to="/">
          Go to index
        </Link>
        <br />
        <Link data-test-id="Link-to-fridge" to="/fridge">
          Go to fridge
        </Link>
        <br />
      </React.Fragment>
    )
  }
}
