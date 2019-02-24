import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import rootReducer from '../reducers'
import initialState from '../reducers/initialState'

export const history = createHistory()

const middleware = [thunk, routerMiddleware(history)]

const appStore = createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default appStore
