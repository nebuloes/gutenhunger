import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import arrow from '../arrow.png'

const StyledH1 = styled.h1`
  display: inline;
`
const StyledImg = styled.img`
  transform: rotate(90deg);
`

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
    const { recipe } = this.props
    return this.state.hidden ? (
      <img src={arrow} alt="" width="30px" onClick={this.toggleContent} />
    ) : (
      <React.Fragment>
        <StyledImg
          src={arrow}
          alt=""
          width="30px"
          onClick={this.toggleContent}
        />
        <h2>
          {recipe.SchwierigkeitsgradName}, {recipe.Minuten} Minuten
        </h2>
        <h3>Zutaten</h3>
        <ul>
          {recipe.Zutaten.split(',').map((zutat, i) => (
            <li key={i}>{zutat}</li>
          ))}
        </ul>
        <Link to={'/recipe/' + recipe.RezeptID}>zum Rezept</Link>
      </React.Fragment>
    )
  }

  render() {
    const { recipe } = this.props
    return (
      <div data-test-id="Recipe-card">
        <Link to={'/recipe/' + recipe.RezeptID}>
          <StyledH1>{recipe.RezeptName}</StyledH1>
        </Link>
        {this.renderShortOrLongRecipeCard()}
      </div>
    )
  }
}
