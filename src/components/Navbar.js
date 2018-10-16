import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledNavbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  position: fixed;
  font-size: 16pt;
  color: rgb(80, 78, 70);
  display: flex;
  background: rgb(210, 140, 55);
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 20;
`

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Link data-test-id="Link-to-index" to="/">
          <FontAwesomeIcon icon="search" />
        </Link>
        <br />
        <Link data-test-id="Link-to-fridge" to="/fridge">
          <FontAwesomeIcon icon="receipt" />
        </Link>
        <br />
        <Link data-test-id="Link-to-likes" to="/likes">
          <FontAwesomeIcon icon="heart" />
        </Link>
      </StyledNavbar>
    )
  }
}
