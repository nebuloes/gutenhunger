import { connect } from 'react-redux'
import { saveRecipe, removeRecipe } from '../actions'
import RecipeCard from '../components/RecipeCard'

const mapStateToProps = state => ({
  likedRecipes: state.likedRecipes,
})

const mapDispatchToProps = dispatch => ({
  onSave: RezeptID => {
    dispatch(saveRecipe({ RezeptID }))
  },
  onUnsave: recipeIndex => {
    dispatch(removeRecipe({ recipeIndex }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard)
