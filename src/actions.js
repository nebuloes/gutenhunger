import { createAction } from 'redux-actions'

const ACTIONS = {
  SAVE_RECIPE: 'SAVE_RECIPE',
  REMOVE_RECIPE: 'REMOVE_RECIPE',
}

export default ACTIONS

export const saveRecipe = createAction(ACTIONS.SAVE_RECIPE)
export const removeRecipe = createAction(ACTIONS.REMOVE_RECIPE)