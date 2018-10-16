import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

const StyledH2 = styled.h2`
  margin-bottom: 40px;
  font-size: 20pt;
`

export default class LikedRecipes extends Component {
  static propTypes = {
    likedRecipes: PropTypes.array,
  }

  render() {
    return (
      <React.Fragment>
        <StyledH2>
          <center>Gemerkte Rezepte</center>
        </StyledH2>
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
