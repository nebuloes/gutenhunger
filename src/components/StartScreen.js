import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

export default class StartScreen extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    inputValue: '',
    search: false,
  }

  updateInputValue = event => {
    const input = event.target
    this.setState({
      inputValue: input.value,
    })
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    if (event.key === 'Enter' && inputValue !== '') {
      this.setState({ search: true })
    }
  }

  showRecipesFromSearch() {
    const { inputValue } = this.state
    const search = recipes.map(recipe => Object.values(recipe))
    console.log(search)
    return search.includes(inputValue) ? <div>success</div> : <div>fail</div>
    // recipes.map(recipe => (
    //   <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
    // ))
  }

  showRecipesOrSearchResult() {
    return this.state.search
      ? this.showRecipesFromSearch()
      : recipes.map(recipe => (
        <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
      ))
  }

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
        />
        {this.showRecipesOrSearchResult()}
        <Link data-test-id="Link-to-fridge" to="/fridge">
          Go to fridge
        </Link>
      </React.Fragment>
    )
  }
}

// const { inputValue } = this.state
// const foundRecipes = recipes.filter(recipe => recipe.includes(inputValue))
// this.state.search
//       ? foundRecipes.map(recipe => (
//         <RecipeCardContainer key={recipe.RezeptID} recipe={foundRecipes} />
//       ))
//       : recipes.map(recipe => (
//         <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
//       ))
