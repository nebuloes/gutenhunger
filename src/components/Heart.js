import React, { Component } from 'react'
import PropTypes from 'prop-types'

import heart from '../heart.png'
import heartFilled from '../heart-fill.png'

export default class Heart extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    likedRecipes: PropTypes.any,
    onSave: PropTypes.any,
    onUnsave: PropTypes.any,
  }

  renderEmptyOrFullHeart() {
    const { onSave, onUnsave, likedRecipes } = this.props
    const foundRecipe = likedRecipes.find(
      recipe => likedRecipes === recipe.RezeptID
    )
    return foundRecipe ? (
      <img
        data-test-id="Recipe-card-toggle"
        src={heartFilled}
        alt=""
        width="30px"
        onClick={onUnsave}
      />
    ) : (
      <img
        data-test-id="Recipe-card-toggle"
        src={heart}
        alt=""
        width="30px"
        onClick={onSave}
      />
    )
  }

  render() {
    return (
      <img
        data-test-id="Recipe-card-toggle"
        src={heartFilled}
        alt=""
        width="30px"
        onClick={this.props.onUnsave}
      />
    )
  }
}
//<React.Fragment>{this.renderEmptyOrFullHeart()}</React.Fragment>
