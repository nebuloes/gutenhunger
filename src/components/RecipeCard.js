import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import arrow from '../arrow.png'

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired,
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
    return this.state.hidden ? (
      <img src={arrow} alt="" width="30px" onClick={this.toggleContent} />
    ) : (
      <React.Fragment>
        <img src={arrow} alt="" width="30px" onClick={this.toggleContent} />
        <div>Test Test</div>
      </React.Fragment>
    )
  }

  render() {
    const { recipe } = this.props
    return (
      <div data-test-id="Recipe-card">
        <Link to={'/recipe/' + recipe.RezeptID}>
          <h1>{recipe.RezeptName}</h1>
        </Link>
        {this.renderShortOrLongRecipeCard()}
      </div>
    )
  }
}
