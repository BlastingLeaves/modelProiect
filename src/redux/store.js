import {applyMiddleware, compose, createStore} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import {createBrowserHistory} from 'history'
import createRootReducer from './reducer'



//Router middleware setup
export const history = createBrowserHistory()

//Api middleware setup


const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
    middleware.push(freeze)
    const devToolsExtension = window['__REDUX_DEVTOOLS_EXTENSION__']
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    createRootReducer(history),
    composedEnhancers
)

export default store
