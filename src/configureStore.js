import { createStore } from 'redux'
import rootReducer from './rootReducer'

export default function configureStore() {
  const store = createStore(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
