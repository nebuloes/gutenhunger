import { connect } from 'react-redux'
import { startGame, continueGame, postNewGame, fetchGames } from '../actions'
import RecipeCard from '../components/RecipeCard'

const mapStateToProps = state => ({
  games: state.games,
})

const mapDispatchToProps = dispatch => ({
  onStartGame: () => {
    dispatch(startGame())
  },
  onContinueGame: index => {
    dispatch(continueGame({ index }))
  },
  onFetchGames: () => {
    dispatch(fetchGames())
  },
  onCreateGame: title => dispatch(postNewGame(title)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeCard)
