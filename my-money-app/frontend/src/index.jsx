import React from 'react'
import ReactDom from 'react-dom'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './main/reducers'
import Routes from './main/routes'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
     && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers)
ReactDom.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('app'))
