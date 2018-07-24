import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import App from './components/App'
import rootSaga from './sagas'

const { store, sagaMiddleware } = configureStore()
sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
