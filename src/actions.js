import { createAction } from 'redux-actions'

const ACTIONS = {
  SAVE_RECIPE: 'SAVE_RECIPE',
  REMOVE_RECIPE: 'REMOVE_RECIPE',
  ADD_INGREDIENTS: 'ADD_INGREDIENTS',
  REMOVE_INGREDIENTS: 'REMOVE_INGREDIENTS',
  ADD_FRIDGEITEM: 'ADD_FRIDGEITEM',
  DELETE_FRIDGEITEM: 'DELETE_FRIDGEITEM',
  EDIT_FRIDGEITEM: 'EDIT_FRIDGEITEM',
  EDIT_USERNAME: 'EDIT_USERNAME',
  EDIT_AGE: 'EDIT_AGE',
}

export default ACTIONS

export const saveRecipe = createAction(ACTIONS.SAVE_RECIPE)
export const removeRecipe = createAction(ACTIONS.REMOVE_RECIPE)
export const addIngredients = createAction(ACTIONS.ADD_INGREDIENTS)
export const removeIngredients = createAction(ACTIONS.REMOVE_INGREDIENTS)
export const addFridgeitem = createAction(ACTIONS.ADD_FRIDGEITEM)
export const deleteFridgeitem = createAction(ACTIONS.DELETE_FRIDGEITEM)
export const editFridgeitem = createAction(ACTIONS.EDIT_FRIDGEITEM)
export const editUsername = createAction(ACTIONS.EDIT_USERNAME)
export const editAge = createAction(ACTIONS.EDIT_AGE)
