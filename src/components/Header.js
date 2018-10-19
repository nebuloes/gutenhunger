import React, { Component } from 'react'
import styled from 'styled-components'
import SearchInput, { createFilter } from 'react-search-input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

const StyledNavbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  font-size: 12pt;
  color: rgb(80, 78, 70);
  display: flex;
  background: rgb(210, 140, 55);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  box-sizing: border-box;
  padding: 10px 30px 8px 30px;
`

const SearchResults = styled.div`
  height: 100vh;
  overflow: hidden;
`

const KEYS_TO_FILTERS = [
  'RezeptName',
  'SchwierigkeitsgradName',
  'Minuten',
  'Zutaten',
  'Zubereitung',
]

export default class Navbar extends Component {
  state = {
    searchTerm: '',
  }

  render() {
    const filteredRecipes = recipes.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <React.Fragment>
        <StyledNavbar>
          <FontAwesomeIcon icon="bars" />
          <FontAwesomeIcon icon="search" />
          <SearchInput
            data-test-id="Search-input"
            className="navbar-input"
            onChange={this.searchUpdated}
            placeholder="Rezept suchen..."
          />
        </StyledNavbar>
        {this.state.searchTerm === '' ? null : (
          <SearchResults>
            {filteredRecipes.map(recipe => {
              return (
                <RecipeCardContainer
                  data-test-id="Search-result"
                  key={recipe.RezeptID}
                  recipe={recipe}
                />
              )
            })}
          </SearchResults>
        )}
      </React.Fragment>
    )
  }

  searchUpdated = term => {
    this.setState({ searchTerm: term })
  }
}
