import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  margin-bottom: 40px;
  font-size: 20pt;
`

export default class List extends Component {
  static propTypes = {
    ingredients: PropTypes.array,
    index: Number,
  }

  render() {
    //const splitArray = this.props.ingredients.split(,)
    return (
      <div>
        <StyledH2>
          <center>Einkaufsliste</center>
        </StyledH2>

        {this.props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </div>
    )
  }
}
