import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { createFilter } from 'react-search-input'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 16pt;
  font-weight: 600;
`

const KEYS_TO_FILTERS = [
  'RezeptName',
  'SchwierigkeitsgradName',
  'Minuten',
  'Zutaten',
  'Zubereitung',
]

export default class StartScreen extends Component {
  static propTypes = {
    username: PropTypes.string,
  }

  state = {
    searchTerm: '',
  }

  render() {
    const filteredRecipes = recipes.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <div>
        <StyledSection>Hallo {this.props.username}!</StyledSection>
        {filteredRecipes.map(recipe => {
          return (
            <RecipeCardContainer
              data-test-id="Search-result"
              key={recipe.RezeptID}
              recipe={recipe}
            />
          )
        })}
      </div>
    )
  }

  searchUpdated = term => {
    this.setState({ searchTerm: term })
  }
}
