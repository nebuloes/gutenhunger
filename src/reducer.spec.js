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

  describe(ACTIONS.ADD_FRIDGEITEM, () => {
    it('adds value from input to fridgeContent array', () => {
      const state = {
        likedRecipes: [12, 21, 13, 47],
        fridgeContent: [],
      }
      const action = {
        type: ACTIONS.ADD_FRIDGEITEM,
        payload: {
          inputValue: 'Banane',
        },
      }

      expect(reducer(state, action)).toEqual({
        likedRecipes: [12, 21, 13, 47],
        fridgeContent: ['Banane'],
      })
    })

    it('adds value from input to fridgeContent array and keeps existing strings in array', () => {
      const state = {
        fridgeContent: ['Banane', 'Salat', 'Käse'],
      }
      const action = {
        type: ACTIONS.ADD_FRIDGEITEM,
        payload: {
          inputValue: 'Milchschnitte',
        },
      }

      expect(reducer(state, action)).toEqual({
        fridgeContent: ['Banane', 'Salat', 'Käse', 'Milchschnitte'],
      })
    })
  })

  describe(ACTIONS.DELETE_FRIDGEITEM, () => {
    it('deletes certain item from fridgeContent array', () => {
      const state = {
        fridgeContent: ['Banane', 'Salat', 'Käse', 'Milchschnitte'],
      }
      const action = {
        type: ACTIONS.DELETE_FRIDGEITEM,
        payload: {
          index: 1,
        },
      }

      expect(reducer(state, action)).toEqual({
        fridgeContent: ['Banane', 'Käse', 'Milchschnitte'],
      })
    })
  })

  describe(ACTIONS.EDIT_FRIDGEITEM, () => {
    it('edits certain item from fridgeContent array and updates string', () => {
      const state = {
        fridgeContent: ['Banane', 'Salat', 'Käse', 'Milchschnitte'],
      }
      const action = {
        type: ACTIONS.EDIT_FRIDGEITEM,
        payload: {
          index: 2,
          inputValue: 'Kääääse',
        },
      }

      expect(reducer(state, action)).toEqual({
        fridgeContent: ['Banane', 'Salat', 'Kääääse', 'Milchschnitte'],
      })
    })
  })
})
