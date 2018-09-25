import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducer'
import { saveToLocalStorage } from '../middlewares'
import { recipes } from '../recipes.json'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
//import RecipeCard from './RecipeCard'
import Recipe from './Recipe'
import RecipeCardContainer from '../containers/RecipeCardContainer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(saveToLocalStorage)
)

class App extends Component {
  renderRecipeCards = () => {
    return recipes.map(recipe => (
      <RecipeCardContainer key={recipe.RezeptID} recipe={recipe} />
    ))
  }

  renderRecipe = ({ match }) => {
    const recipeID = Number(match.params.id)
    const foundRecipe = recipes.find(recipe => recipe.RezeptID === recipeID)
    return <Recipe recipe={foundRecipe} />
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" render={this.renderRecipeCards} />
            <Route path="/recipe/:id" render={this.renderRecipe} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
