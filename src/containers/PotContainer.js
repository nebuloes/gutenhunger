import { connect } from 'react-redux'
import Pot from '../components/Pot'

const mapStateToProps = state => ({
  likedRecipes: state.likedRecipes,
})

export default connect(mapStateToProps)(Pot)
