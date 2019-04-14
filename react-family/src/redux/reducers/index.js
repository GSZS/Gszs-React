// import userInfo_fn from './userInfo.js'
// import { combineReducers } from 'redux';

// export const rootReducer = combineReducers({
//     userInfo_fn
// })

// action
import {SWITCH_TYPES} from '../actions/index'

const initState = {
    menuName : '主页',
}

const Switch_Reducers = (state=initState, action) => {
    switch(action.type){
        case SWITCH_TYPES:
            return {
                ...state,
                menuName : action.menuName
            }
        default:
            return state
    }
}

export default Switch_Reducers
