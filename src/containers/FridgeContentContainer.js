import { connect } from 'react-redux'
import { addFridgeitem, deleteFridgeitem, editFridgeitem } from '../actions'
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
  onEdit: (inputValue, index) => {
    dispatch(editFridgeitem({ inputValue, index }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FridgeContent)
