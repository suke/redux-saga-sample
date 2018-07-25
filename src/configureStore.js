import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import rootSaga from './sagas'
export const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  sagaMiddleware.run(rootSaga)

  return store
}
