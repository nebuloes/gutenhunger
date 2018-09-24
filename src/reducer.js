import ACTIONS from './actions'
import { load } from './services'

const initialState = load('app') || {
  likedRecipes: [],
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
  default:
    return state
  }
}
