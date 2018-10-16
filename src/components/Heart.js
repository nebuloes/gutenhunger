import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeartSection = styled.section`
  font-size: 30pt;
  color: rgb(210, 140, 55);
`

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
      <FontAwesomeIcon icon="heart" onClick={onUnsave} />
    ) : (
      <i className="far fa-heart" onClick={onSave} />
    )
  }

  render() {
    return <HeartSection>{this.renderEmptyOrFullHeart()}</HeartSection>
  }
}
