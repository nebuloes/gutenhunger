import { connect } from 'react-redux'
import { addFridgeitem, deleteFridgeitem } from '../actions'
import FridgeContent from '../components/FridgeContent'

const mapStateToProps = state => ({
  fridgeContent: state.fridgeContent,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: inputValue => {
    dispatch(addFridgeitem({ inputValue }))
  },
  onDelete: index => {
    dispatch(deleteFridgeitem({ index }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FridgeContent)
