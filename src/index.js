import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './configureStore'
import { Provider } from 'react-redux'
import rootSaga from './sagas'
import App from './containers/App'

const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
