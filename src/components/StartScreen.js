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
      this.props.onSubmit(inputValue)
      this.setState({ inputValue: '' })
    }
  }

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.updateInputValue}
          onKeyUp={this.checkForEnterButton}
        />
        {recipes.map(recipe => (
          <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
        ))}
        <Link data-test-id="Link-to-fridge" to="/fridge">
          Go to fridge
        </Link>
      </React.Fragment>
    )
  }
}
