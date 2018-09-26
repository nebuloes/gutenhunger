import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'
import { saveToLocalStorage } from '../middlewares'
import { recipes } from '../recipes.json'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import RecipeContainer from '../containers/RecipeContainer'
import RecipeCardContainer from '../containers/RecipeCardContainer'
import FridgeContentContainer from '../containers/FridgeContentContainer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage)
)

class App extends Component {
  renderRecipeCards = () => {
    return (
      <React.Fragment>
        {recipes.map(recipe => (
          <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
        ))}
        <Link to="/fridge">Go to fridge</Link>
      </React.Fragment>
    )
  }

  renderRecipe = ({ match }) => {
    const recipeID = Number(match.params.id)
    const foundRecipe = recipes.find(recipe => recipe.RezeptID === recipeID)
    return <RecipeContainer recipe={foundRecipe} />
  }

  renderFridgeContent = () => {
    return <FridgeContentContainer />
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" render={this.renderRecipeCards} />
            <Route path="/recipe/:id" render={this.renderRecipe} />
            <Route path="/fridge" component={FridgeContentContainer} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
