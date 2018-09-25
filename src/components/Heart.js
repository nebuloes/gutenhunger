import React, { Component } from 'react'
import PropTypes from 'prop-types'

import heart from '../heart.png'
import heartFilled from '../heart-fill.png'

export default class Heart extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onSave: PropTypes.func,
    onUnsave: PropTypes.func,
    likedRecipes: PropTypes.array,
  }

  renderEmptyOrFullHeart() {
    const { onSave, onUnsave, likedRecipes, recipe } = this.props
    const foundRecipe = likedRecipes.includes(recipe.RezeptID)
    return foundRecipe ? (
      <img
        data-test-id="Recipe-saved"
        src={heartFilled}
        alt=""
        width="30px"
        onClick={onUnsave}
      />
    ) : (
      <img
        data-test-id="Recipe-not-saved"
        src={heart}
        alt=""
        width="30px"
        onClick={onSave}
      />
    )
  }

  render() {
    return <React.Fragment>{this.renderEmptyOrFullHeart()}</React.Fragment>
  }
}
