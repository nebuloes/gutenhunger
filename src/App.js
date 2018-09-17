import React, { Component } from 'react'
import './App.css'
import { recipes } from './recipes.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {recipes.map((recipe, i) => (
          <div key={i}>
            <h1>{recipe.RezeptName}</h1>
            <h2>
              {recipe.SchwierigkeitsgradName}, {recipe.Minuten} Minuten
            </h2>
            <h3>Zutaten</h3>
            <ul>
              {recipe.Zutaten.split(',').map((zutat, i) => (
                <li key={i}>{zutat}</li>
              ))}
            </ul>
            <div>{recipe.Zubereitung}</div>
          </div>
        ))}
      </div>
    )
  }
}

export default App
