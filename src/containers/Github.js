import { connect } from 'react-redux'
import { setInputValue, getRepository } from '../modules/Github'
import Github from '../components/Github'

const mapStateToProps = state => {
  return {
    inputValue: state.githubReducer.inputValue,
    data: state.githubReducer.data
  }
}

const mapDispatchToPros = dispatch => {
  return {
    getRepository: name => dispatch(getRepository(name)),
    setInputValue: value => dispatch(setInputValue(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(Github)
