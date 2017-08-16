import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

export const history = createHistory()

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const middleware = [ sagaMiddleware, routerMiddleware(history) ]
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger())
    }
    return {
        ...createStore(rootReducer, applyMiddleware(...middleware)),
        runSaga: sagaMiddleware.run,
    }
}
