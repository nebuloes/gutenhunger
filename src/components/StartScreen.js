import React, { Component } from 'react'
import styled from 'styled-components'
import SearchInput, { createFilter } from 'react-search-input'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
`

const KEYS_TO_FILTERS = [
  'RezeptName',
  'SchwierigkeitsgradName',
  'Minuten',
  'Zutaten',
  'Zubereitung',
]

export default class StartScreen extends Component {
  state = {
    searchTerm: '',
  }

  render() {
    const filteredRecipes = recipes.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <div>
        <StyledSection>
          <SearchInput
            data-test-id="Search-input"
            className="search-input"
            onChange={this.searchUpdated}
            placeholder="Rezept suchen..."
          />
        </StyledSection>
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
