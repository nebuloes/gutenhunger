import { createAction } from 'redux-actions'

const ACTIONS = {
  SAVE_RECIPE: 'SAVE_RECIPE',
  REMOVE_RECIPE: 'REMOVE_RECIPE',
  ADD_FRIDGEITEM: 'ADD_FRIDGEITEM',
  DELETE_FRIDGEITEM: 'DELETE_FRIDGEITEM',
  EDIT_FRIDGEITEM: 'EDIT_FRIDGEITEM',
}

export default ACTIONS

export const saveRecipe = createAction(ACTIONS.SAVE_RECIPE)
export const removeRecipe = createAction(ACTIONS.REMOVE_RECIPE)
export const addFridgeitem = createAction(ACTIONS.ADD_FRIDGEITEM)
export const deleteFridgeitem = createAction(ACTIONS.DELETE_FRIDGEITEM)
export const editFridgeitem = createAction(ACTIONS.EDIT_FRIDGEITEM)
