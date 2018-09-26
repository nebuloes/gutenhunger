import ACTIONS from './actions'
import { load } from './services'

const initialState = load('app') || {
  likedRecipes: [],
  fridgeContent: [],
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

  default:
    return state
  }
}
