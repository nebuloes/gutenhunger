import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchInput, { createFilter } from 'react-search-input'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

const KEYS_TO_FILTERS = [
  'RezeptName',
  'SchwierigkeitsgradName',
  'Minuten',
  'Zutaten',
  'Zubereitung',
  'dest.name',
]

export default class SearchScreen extends Component {
  state = {
    searchTerm: '',
  }

  render() {
    const filteredRecipes = recipes.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <div>
        <SearchInput
          className="search-input"
          onChange={this.searchUpdated}
          placeholder="Rezept suchen"
        />
        {filteredRecipes.map(recipe => {
          return <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
        })}
        <Link data-test-id="Link-to-fridge" to="/fridge">
          Go to fridge
        </Link>
      </div>
    )
  }

  searchUpdated = term => {
    this.setState({ searchTerm: term })
  }
}
