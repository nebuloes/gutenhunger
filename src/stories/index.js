/* global module */

import React from 'react'

import { storiesOf } from '@storybook/react'

import { BrowserRouter as Router } from 'react-router-dom'

import RecipeCard from '../components/RecipeCard'
import Recipe from '../components/Recipe'
import Heart from '../components/Heart'
import SearchInput from 'react-search-input'
import FridgeContent from '../components/FridgeContent'

storiesOf('RecipeCard', module).add(
  'shows recipe title, toggles on click',
  () => (
    <Router>
      <RecipeCard
        recipe={{
          RezeptID: 1,
          RezeptName: 'Rezept 19',
          SchwierigkeitsgradName: 'normal',
          Minuten: 60,
          Zutaten: '250g Nudeln, 1 Ei(er)',
          Zubereitung: '1. Tu dies 2. Tu das',
        }}
        likedRecipes={[12]}
      />
    </Router>
  )
)
storiesOf('Recipe', module)
  .add('shows complete recipe with like added', () => (
    <Recipe
      recipe={{
        RezeptID: 12,
        RezeptName: 'Rezept 19',
        SchwierigkeitsgradName: 'normal',
        Minuten: 60,
        Zutaten: '250g Nudeln, 1 Ei(er)',
        Zubereitung: '1. Tu dies 2. Tu das',
      }}
      likedRecipes={[12]}
    />
  ))
  .add(
    'shows recipe with many ingredients and long title & instructions',
    () => (
      <Recipe
        recipe={{
          RezeptName:
            'Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem',
          SchwierigkeitsgradName: 'normal',
          Minuten: 60,
          Zutaten:
            '250g Nudeln, 1 Ei(er), 20 Tomaten, 300ml Milch, 250g Nudeln, 1 Ei(er), 20 Tomaten, 300ml Milch, 250g Nudeln, 1 Ei(er), 20 Tomaten, 300ml Milch',
          Zubereitung:
            '1. Tu dies 2. Tu das Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem 1. Tu dies 2. Tu das Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem 1. Tu dies 2. Tu das Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem Lorem ipsum dolor sit amet gloribus omnibus glorem fratatem',
        }}
        likedRecipes={[12]}
      />
    )
  )
storiesOf('Heart', module)
  .add('not liked', () => (
    <Heart
      recipe={{
        RezeptID: 1,
      }}
      likedRecipes={[12]}
    />
  ))
  .add('liked', () => (
    <Heart
      recipe={{
        RezeptID: 12,
      }}
      likedRecipes={[12]}
    />
  ))

storiesOf('Search Field', module)
  .add('Search Field with nothing entered yet', () => (
    <SearchInput placeholder="Rezept suchen" />
  ))
  .add('Search Field with something entered', () => (
    <SearchInput value="Käse" />
  ))

storiesOf('Fridge', module)
  .add('Fridge with no items added', () => <FridgeContent fridgeContent={[]} />)
  .add('Fridge with some items added', () => (
    <FridgeContent fridgeContent={['Joghurt', 'Brokkoli', 'Butter']} />
  ))
