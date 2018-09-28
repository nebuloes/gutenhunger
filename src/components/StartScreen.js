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

  showRecipesOrSearchResult() {
    return this.state.search ? (
      <div>test</div>
    ) : (
      recipes.map(recipe => (
        <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
      ))
    )
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
