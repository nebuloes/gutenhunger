import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Heart from './Heart'

const StyledHeartSection = styled.section`
  font-size: 25pt;
`

const StyledSubtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -25px;
  font-weight: 200;
`

const StyledIconSpan = styled.span`
  color: rgb(240, 180, 65);
`

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSave: PropTypes.func,
    onUnsave: PropTypes.func,
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
    likedRecipes: PropTypes.array,
    ingredients: PropTypes.array,
  }

  state = {
    added: false,
  }

  changeState(Zutaten, RezeptID) {
    this.setState({ added: !this.state.added }) && this.state.added
      ? this.props.onRemove(Zutaten, RezeptID)
      : this.props.onAdd(Zutaten, RezeptID)
  }

  changeStateAndRemove(Zutaten, ingredientIndex) {
    this.setState({ added: !this.state.added })
    this.props.onRemove(Zutaten, ingredientIndex)
  }

  render() {
    const { recipe, onSave, onUnsave, likedRecipes, ingredients } = this.props
    const RezeptID = recipe.RezeptID
    const recipeIndex = likedRecipes.findIndex(recipe => recipe === RezeptID)
    const ingredientIndex = ingredients.indexOf(recipe.Zutaten)
    return (
      <div data-test-id="Recipe-complete">
        <h1>{recipe.RezeptName}</h1>
        <StyledSubtitle>
          <h4>
            {recipe.SchwierigkeitsgradName}, {recipe.Minuten} Minuten
          </h4>
          <StyledHeartSection>
            <Heart
              recipe={recipe}
              onSave={() => onSave(RezeptID)}
              onUnsave={() => onUnsave(recipeIndex)}
              likedRecipes={likedRecipes}
            />
          </StyledHeartSection>
        </StyledSubtitle>
        <h3>
          {this.state.added ? (
            <StyledIconSpan>
              <FontAwesomeIcon
                icon="receipt"
                onClick={() =>
                  this.changeStateAndRemove(recipe.Zutaten, ingredientIndex)
                }
              />
            </StyledIconSpan>
          ) : (
            <FontAwesomeIcon
              icon="receipt"
              onClick={() => this.changeState(recipe.Zutaten, RezeptID)}
            />
          )}
          Zutaten
        </h3>
        <ul>
          {recipe.Zutaten.split(',').map((zutat, i) => (
            <li key={i}>{zutat}</li>
          ))}
        </ul>
        <small>1 Portion</small>
        <div>
          {recipe.Zubereitung.map((task, i) => (
            <p key={i}>{task}</p>
          ))}
        </div>
      </div>
    )
  }
}
