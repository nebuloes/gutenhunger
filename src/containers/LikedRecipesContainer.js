import { connect } from 'react-redux'
import LikedRecipes from '../components/LikedRecipes'

const mapStateToProps = state => ({
  likedRecipes: state.likedRecipes,
})

export default connect(
  mapStateToProps,
  null
)(LikedRecipes)
