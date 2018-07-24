import { combineReducers } from 'redux'
import counterReducer from './modules/Counter'
import githubReducer from './modules/Github'

const reducer = combineReducers({
  counterReducer,
  githubReducer
})

export default reducer
