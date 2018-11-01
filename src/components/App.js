import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'
import { saveToLocalStorage } from '../middlewares'
import { recipes } from '../recipes.json'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../App.css'
import StartScreenContainer from '../containers/StartScreenContainer'
import RecipeContainer from '../containers/RecipeContainer'
import LikedRecipesContainer from '../containers/LikedRecipesContainer'
import PotContainer from '../containers/PotContainer'
import FridgeContentContainer from '../containers/FridgeContentContainer'
import SettingsContainer from '../containers/SettingsContainer'
import Header from './Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faReceipt,
  faSearch,
  faHeart,
  faChevronCircleRight,
  faChevronCircleDown,
  faBars,
  faCogs,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import ListContainer from '../containers/ListContainer'

library.add(
  faReceipt,
  faSearch,
  faHeart,
  faChevronCircleRight,
  faChevronCircleDown,
  faBars,
  faCogs,
  faHome
)

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage)
)

class App extends Component {
  renderRecipe = ({ match }) => {
    const recipeID = Number(match.params.id)
    const foundRecipe = recipes.find(recipe => recipe.RezeptID === recipeID)
    return <RecipeContainer recipe={foundRecipe} />
  }

  renderIcons() {
    return (
      <div className="icons">
        <FontAwesomeIcon icon="cogs" />
        <br />
        <br />
        <FontAwesomeIcon icon="receipt" />
        <br />
        <br />
        <FontAwesomeIcon icon="heart" />
      </div>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={StartScreenContainer} />
            <Route path="/recipe/:id" render={this.renderRecipe} />
            <Route path="/likes" component={LikedRecipesContainer} />
            <Route path="/list" component={ListContainer} />
            <Route path="/pot" component={PotContainer} />
            <Route path="/fridge" component={FridgeContentContainer} />
            <Route path="/settings" component={SettingsContainer} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
