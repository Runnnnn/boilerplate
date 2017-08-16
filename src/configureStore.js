import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const middleware = [ sagaMiddleware ]
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger())
    }
    return {
        ...createStore(rootReducer, applyMiddleware(...middleware)),
        runSaga: sagaMiddleware.run
    }
}
