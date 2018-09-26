import { connect } from 'react-redux'
import { addFridgeitem } from '../actions'
import FridgeContent from '../components/FridgeContent'

const mapStateToProps = state => ({
  fridgeContent: state.fridgeContent,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: inputValue => {
    dispatch(addFridgeitem({ inputValue }))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FridgeContent)
