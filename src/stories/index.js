/* global module */

import React from 'react'

import { storiesOf } from '@storybook/react'

import Recipe from '../components/Recipe'

storiesOf('Recipe', module)
  .add('show one recipe', () => (
    <Recipe
      recipe={{
        RezeptName: 'Rezept 19',
        SchwierigkeitsgradName: 'normal',
        Minuten: 60,
        Zutaten: '250g Nudeln, 1 Ei(er)',
        Zubereitung: '1. Tu dies 2. Tu das',
      }}
    />
  ))
  .add(
    'show recipe with many ingredients and long title & instructions',
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
        />
    )
  )
