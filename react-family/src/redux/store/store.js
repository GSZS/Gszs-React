import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware  from 'redux-thunk'// 引入中间件thunk
import rootReducer from '../reducers/userInfo.js'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware ))
export default store

