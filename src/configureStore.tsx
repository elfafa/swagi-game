import { createStore, compose, applyMiddleware, Store } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import thunkMiddleware from 'redux-thunk'

import { RootState, reducers } from './store'

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default function configureStore(
    initialState?: RootState
): Store<RootState> {
    const composeEnhancers = composeWithDevTools({})
    return createStore(
        reducers,
        initialState!,
        composeEnhancers(applyMiddleware(
            routerMiddleware(createBrowserHistory()),
            thunkMiddleware
        )),
    )
}