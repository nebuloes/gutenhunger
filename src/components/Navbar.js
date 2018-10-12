import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
`

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <Link data-test-id="Link-to-index" to="/">
          Go to index
        </Link>
        <br />
        <Link data-test-id="Link-to-fridge" to="/fridge">
          Go to fridge
        </Link>
        <br />
        <Link data-test-id="Link-to-likes" to="/likes">
          Go to likes
        </Link>
      </StyledNavbar>
    )
  }
}
