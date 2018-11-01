import React, { Component } from 'react'
import styled from 'styled-components'
import SearchInput, { createFilter } from 'react-search-input'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { recipes } from '../recipes.json'
import RecipeCardContainer from '../containers/RecipeCardContainer'

import fridge from '../big-fridge.png'

const StyledNavbar = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  font-size: 16pt;
  display: flex;
  background: rgb(240, 180, 65);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  box-sizing: border-box;
  padding: 10px 30px 8px 30px;
  height: 45px;
`

const SearchIcon = styled.span`
  position: relative;
  left: 65px;
`

const StyledMenu = styled.div`
  position: fixed;
  left: 0;
  z-index: 10;
  height: 100%;
  width: 215px;
  background: white;
  box-sizing: border-box;
  padding: 30px 0 0 20px;
  font-size: 16pt;
`

const StyledH1 = styled.h1`
  display: inline;
  font-size: 12pt;
  color: rgb(80, 78, 70);
  font-weight: 600;
  margin: 0 0 20px 10px;
`

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 6;
  background: rgba(0, 0, 0, 0.7);
`

const SearchResults = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: white;
  overflow: scroll;
  z-index: 5;
  box-sizing: border-box;
  padding: 20px 60px 40px 0;
`

const StyledImg = styled.img`
  height: 23px;
`

const StyledMenuPoint = styled.div`
  margin-bottom: 20px;
`

const KEYS_TO_FILTERS = [
  'RezeptName',
  'SchwierigkeitsgradName',
  'Minuten',
  'Zutaten',
  'Zubereitung',
]

export default class Header extends Component {
  state = {
    searchTerm: '',
    menu: false,
  }

  showMenu() {
    this.setState({
      menu: !this.state.menu,
    })
  }

  closeSearch() {
    this.setState({
      searchTerm: '',
    })
  }

  render() {
    const filteredRecipes = recipes.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    )

    return (
      <React.Fragment>
        <StyledNavbar>
          <FontAwesomeIcon icon="bars" onClick={() => this.showMenu()} />
          <SearchIcon>
            <FontAwesomeIcon icon="search" />
          </SearchIcon>
          <SearchInput
            data-test-id="Search-input"
            className="navbar-input"
            onChange={this.searchUpdated}
            placeholder="Rezept suchen..."
            value={this.state.searchTerm}
          />
        </StyledNavbar>
        {this.state.menu ? (
          <React.Fragment>
            <StyledMenu>
              <StyledMenuPoint>
                <Link
                  data-test-id="Link-to-home"
                  to="/"
                  onClick={() => this.showMenu()}
                >
                  <FontAwesomeIcon icon="home" />
                  <StyledH1>Home</StyledH1>
                </Link>
              </StyledMenuPoint>
              <StyledMenuPoint>
                <Link
                  data-test-id="Link-to-likes"
                  to="/likes"
                  onClick={() => this.showMenu()}
                >
                  <FontAwesomeIcon icon="heart" />
                  <StyledH1> Gemerkte Rezepte</StyledH1>
                </Link>
              </StyledMenuPoint>
              <StyledMenuPoint>
                <Link
                  data-test-id="Link-to-list"
                  to="/list"
                  onClick={() => this.showMenu()}
                >
                  <FontAwesomeIcon icon="receipt" />
                  <StyledH1> Einkaufsliste</StyledH1>
                </Link>
              </StyledMenuPoint>
              {/* <StyledMenuPoint>
                <Link
                  data-test-id="Link-to-pot"
                  to="/pot"
                  onClick={() => this.showMenu()}
                >
                  <StyledImg src={pot} alt="" />
                  <StyledH1> Kochtopf</StyledH1>
                </Link>
              </StyledMenuPoint> */}
              <StyledMenuPoint>
                <Link
                  data-test-id="Link-to-fridge"
                  to="/fridge"
                  onClick={() => this.showMenu()}
                >
                  <StyledImg src={fridge} alt="" />
                  <StyledH1> Vorräte</StyledH1>
                </Link>
              </StyledMenuPoint>
              <StyledMenuPoint>
                <Link
                  data-test-id="Link-to-settings"
                  to="/settings"
                  onClick={() => this.showMenu()}
                >
                  <FontAwesomeIcon icon="cogs" />
                  <StyledH1> Einstellungen</StyledH1>
                </Link>
              </StyledMenuPoint>
            </StyledMenu>
            <StyledOverlay onClick={() => this.showMenu()} />
          </React.Fragment>
        ) : null}

        {this.state.searchTerm === '' ? null : (
          <SearchResults>
            {filteredRecipes.map(recipe => {
              return (
                <RecipeCardContainer
                  data-test-id="Search-result"
                  key={recipe.RezeptID}
                  recipe={recipe}
                  onClick={() => this.closeSearch()}
                />
              )
            })}
          </SearchResults>
        )}
      </React.Fragment>
    )
  }

  searchUpdated = term => {
    this.setState({ searchTerm: term, menu: false })
  }
}
