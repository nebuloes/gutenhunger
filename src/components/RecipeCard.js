import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import arrow from '../arrow.png'

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
  }
  render() {
    const { recipe } = this.props
    return (
      <div data-test-id="Recipe-card">
        <Link to={'/recipe/' + recipe.RezeptID}>
          <h1>{recipe.RezeptName}</h1>
        </Link>
        <img src={arrow} alt="" width="30px" />
      </div>
    )
  }
}
