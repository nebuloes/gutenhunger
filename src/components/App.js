import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'
import { saveToLocalStorage } from '../middlewares'
import { recipes } from '../recipes.json'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import StartScreen from '../components/StartScreen'
import RecipeContainer from '../containers/RecipeContainer'
import LikedRecipesContainer from '../containers/LikedRecipesContainer'
import FridgeContentContainer from '../containers/FridgeContentContainer'

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

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={StartScreen} />
            <Route path="/recipe/:id" render={this.renderRecipe} />
            <Route path="/likes" component={LikedRecipesContainer} />
            <Route path="/fridge" component={FridgeContentContainer} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
