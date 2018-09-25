import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import arrow from '../arrow.png'
import Heart from './Heart'

const StyledH1 = styled.h1`
  display: inline;
`
const StyledImg = styled.img`
  transform: rotate(90deg);
`

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSave: PropTypes.any,
    onUnsave: PropTypes.any,
    likedRecipes: PropTypes.any,
  }

  state = {
    hidden: true,
  }

  toggleContent = () => {
    this.setState({
      hidden: !this.state.hidden,
    })
  }

  renderShortOrLongRecipeCard() {
    const { recipe, onSave, onUnsave, likedRecipes } = this.props
    const RezeptID = recipe.RezeptID
    const recipeIndex = likedRecipes.findIndex(recipe => recipe === RezeptID)
    return this.state.hidden ? (
      <img
        data-test-id="Recipe-card-toggle"
        src={arrow}
        alt=""
        width="30px"
        onClick={this.toggleContent}
      />
    ) : (
      <React.Fragment>
        <StyledImg
          data-test-id="Recipe-card-toggle"
          src={arrow}
          alt=""
          width="30px"
          onClick={this.toggleContent}
        />
        <section data-test-id="Recipe-card-toggled-content">
          <h2>
            {recipe.SchwierigkeitsgradName}, {recipe.Minuten} Minuten{' '}
            <Heart
              onSave={() => onSave(RezeptID)}
              onUnsave={() => onUnsave(recipeIndex)}
              likedRecipes={likedRecipes}
            />
          </h2>
          <h3>Zutaten</h3>
          <ul>
            {recipe.Zutaten.split(',').map((zutat, i) => (
              <li key={i}>{zutat}</li>
            ))}
          </ul>
          <Link to={'/recipe/' + recipe.RezeptID}>zum Rezept</Link>
        </section>
      </React.Fragment>
    )
  }

  render() {
    const { recipe } = this.props
    return (
      <div data-test-id="Recipe-card">
        <Link to={'/recipe/' + recipe.RezeptID}>
          <StyledH1>{recipe.RezeptName}</StyledH1>
        </Link>
        {this.renderShortOrLongRecipeCard()}
      </div>
    )
  }
}
