import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware  from 'redux-thunk'// 引入中间件thunk
import rootReducer from '../reducers/userInfo.js'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware )))
export default store

