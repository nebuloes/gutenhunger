import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from 'react-router-dom'
import Heart from './Heart'

const StyledH1 = styled.h1`
  display: inline;
  font-size: 16pt;
  color: rgb(80, 78, 70);
`
const StyledH2 = styled.h2`
  font-size: 8pt;
  font-weight: 600;
  color: rgba(80, 78, 70, 0.8);
`
const StyledLink = styled.section`
  color: rgb(210, 140, 55);
`

const StyledRecipeCard = styled.section`
  position: relative;
  margin-bottom: 20px;
`

const StyledArrowSection = styled.section`
  color: rgb(210, 140, 55);
  position: absolute;
  top: -5px;
  right: 0;
  z-index: 2;
  font-size: 18pt;
`

const StyledHeartSection = styled.section`
  position: absolute;
  right: 40px;
  top: 50px;
`

const StyledLinkSection = styled.section`
  color: rgb(210, 140, 55);
  position: absolute;
  bottom: 15px;
  right: 0;
  z-index: 2;
`

const DistanceSection = styled.section`
  height: 20px;
`

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
    onSave: PropTypes.func,
    onUnsave: PropTypes.func,
    likedRecipes: PropTypes.array,
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
      <StyledArrowSection>
        <FontAwesomeIcon
          data-test-id="Recipe-card-toggle"
          icon="chevron-circle-right"
          onClick={this.toggleContent}
        />
      </StyledArrowSection>
    ) : (
      <React.Fragment>
        <StyledArrowSection>
          <FontAwesomeIcon
            data-test-id="Recipe-card-toggle"
            icon="chevron-circle-down"
            onClick={this.toggleContent}
          />
        </StyledArrowSection>
        <section data-test-id="Recipe-card-toggled-content">
          <StyledHeartSection>
            <Heart
              recipe={recipe}
              onSave={() => onSave(RezeptID)}
              onUnsave={() => onUnsave(recipeIndex)}
              likedRecipes={likedRecipes}
            />
          </StyledHeartSection>
          <StyledH2>
            {recipe.SchwierigkeitsgradName}, {recipe.Minuten} Minuten{' '}
          </StyledH2>
          <h3>Zutaten</h3>
          <ul>
            {recipe.Zutaten.split(',').map((zutat, i) => (
              <li key={i}>{zutat}</li>
            ))}
          </ul>
          <DistanceSection />
          <StyledLinkSection>
            <Link to={'/recipe/' + recipe.RezeptID}>
              <StyledLink>zum Rezept</StyledLink>
            </Link>
          </StyledLinkSection>
        </section>
      </React.Fragment>
    )
  }

  render() {
    const { recipe } = this.props
    return (
      <StyledRecipeCard data-test-id="Recipe-card">
        <Link to={'/recipe/' + recipe.RezeptID}>
          <StyledH1>{recipe.RezeptName}</StyledH1>
        </Link>
        {this.renderShortOrLongRecipeCard()}
      </StyledRecipeCard>
    )
  }
}
