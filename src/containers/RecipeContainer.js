import { connect } from 'react-redux'
import {
  saveRecipe,
  removeRecipe,
  addIngredients,
  removeIngredients,
} from '../actions'
import Recipe from '../components/Recipe'

const mapStateToProps = state => ({
  likedRecipes: state.likedRecipes,
  ingredients: state.ingredients,
})

const mapDispatchToProps = dispatch => ({
  onSave: RezeptID => {
    dispatch(saveRecipe({ RezeptID }))
  },
  onUnsave: recipeIndex => {
    dispatch(removeRecipe({ recipeIndex }))
  },
  onAdd: (Zutaten, RezeptID) => {
    dispatch(addIngredients({ Zutaten, RezeptID }))
  },
  onRemove: (Zutaten, ingredientIndex) => {
    dispatch(removeIngredients({ Zutaten, ingredientIndex }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)
