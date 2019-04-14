import {createStore, applyMiddleware} from 'redux'
// import promiseMiddleware from '../middleware/promiseMiddleware'
// import rootReducer from '../reducers/userInfo.js'
import MenuReducer from '../reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(MenuReducer, composeWithDevTools())
export default store

