import ACTIONS from './actions'
import { load } from './services'

const initialState = load('app') || {
  likedRecipes: [],
  fridgeContent: [],
  ingredients: [],
  username: 'Johanna',
  age: '24',
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
  case ACTIONS.SAVE_RECIPE:
    return {
      ...state,
      likedRecipes: [...state.likedRecipes, action.payload.RezeptID],
    }

  case ACTIONS.REMOVE_RECIPE:
    return {
      ...state,
      likedRecipes: [
        ...state.likedRecipes.slice(0, action.payload.recipeIndex),

        ...state.likedRecipes.slice(action.payload.recipeIndex + 1),
      ],
    }

  case ACTIONS.ADD_INGREDIENTS:
    return {
      ...state,
      ingredients: [...state.ingredients, action.payload.Zutaten],
    }

  case ACTIONS.REMOVE_INGREDIENTS:
    return {
      ...state,
      ingredients: [
        ...state.ingredients.slice(0, state.ingredients.length - 1),

        ...state.ingredients.slice(state.ingredients.length),
      ],
    }

  case ACTIONS.ADD_FRIDGEITEM:
    return {
      ...state,
      fridgeContent: [...state.fridgeContent, action.payload.inputValue],
    }

  case ACTIONS.DELETE_FRIDGEITEM:
    return {
      ...state,
      fridgeContent: [
        ...state.fridgeContent.slice(0, action.payload.index),

        ...state.fridgeContent.slice(action.payload.index + 1),
      ],
    }

  case ACTIONS.EDIT_FRIDGEITEM:
    return {
      ...state,
      fridgeContent: [
        ...state.fridgeContent.slice(0, action.payload.index),
        action.payload.inputValue,
        ...state.fridgeContent.slice(action.payload.index + 1),
      ],
    }

  case ACTIONS.EDIT_USERNAME:
    return {
      ...state,
      username: action.payload.inputValue,
    }

  case ACTIONS.EDIT_AGE:
    return {
      ...state,
      age: action.payload.inputValue,
    }

  default:
    return state
  }
}
