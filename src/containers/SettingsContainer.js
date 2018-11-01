import { connect } from 'react-redux'
import { editUsername, editAge } from '../actions'
import Settings from '../components/Settings'

const mapStateToProps = state => ({
  likedRecipes: state.likedRecipes,
  username: state.username,
  age: state.age,
})

const mapDispatchToProps = dispatch => ({
  onEdit: (inputValue, index) => {
    dispatch(editUsername({ inputValue, index }))
  },
  onEdit2: (inputValue, index) => {
    dispatch(editAge({ inputValue, index }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
