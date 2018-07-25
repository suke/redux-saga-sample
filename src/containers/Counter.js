import { connect } from 'react-redux'
import { increment, decrement } from '../modules/Counter'
import { getRepository } from '../modules/Github'
import Counter from '../components/Counter'

const mapStateToProps = state => {
  return {
    count: state.counterReducer.count
  }
}

const mapDispatchToPros = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Counter)
