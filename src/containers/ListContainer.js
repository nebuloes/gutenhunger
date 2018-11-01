import { connect } from 'react-redux'
import List from '../components/List'

const mapStateToProps = state => ({
  ingredients: state.ingredients,
})

export default connect(
  mapStateToProps,
  null
)(List)
