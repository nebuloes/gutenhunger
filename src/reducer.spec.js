import ACTIONS from './actions'
import reducer from './reducer'

describe('reducer', () => {
  describe(ACTIONS.SAVE_RECIPE, () => {
    it('saves a recipe to likedRecipes and adds ID to array', () => {
      const state = {
        likedRecipes: [12, 21],
      }
      const action = {
        type: ACTIONS.SAVE_RECIPE,
        payload: { RezeptID: 13 },
      }
      expect(reducer(state, action)).toEqual({
        likedRecipes: [12, 21, 13],
      })
    })
  })

  describe(ACTIONS.REMOVE_RECIPE, () => {
    it('removes ID from likedRecipes', () => {
      const state = {
        likedRecipes: [12, 21, 13, 47],
      }
      const action = {
        type: ACTIONS.REMOVE_RECIPE,
        payload: {
          recipeIndex: 1,
        },
      }

      expect(reducer(state, action)).toEqual({
        likedRecipes: [12, 13, 47],
      })
    })
  })
})
