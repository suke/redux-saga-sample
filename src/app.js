import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import App from './components/App'
const store = configureStore()

const unsubscribe = store.subscribe(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

unsubscribe()
