import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from '../middleware/promiseMiddleware'
import rootReducer from '../reducers/userInfo.js'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)))
export default store

    