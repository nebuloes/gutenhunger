import { connect } from 'react-redux'
import StartScreen from '../components/StartScreen'

const mapStateToProps = state => ({
  username: state.username,
})

export default connect(
  mapStateToProps,
  null
)(StartScreen)
