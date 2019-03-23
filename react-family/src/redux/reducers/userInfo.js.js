import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILD
} from '../actions/userInfo'

const initState = {
    isLoading: false, //加载状态
    userInfo: {},
    errMessage: ''
}

const userInfo_fn = (state = initState, action) => {
    switch (action.type) {
        case GET_USER_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errMessage: ''
            }
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.userInfo,
                errMessage: ''
            }
        case GET_USER_INFO_FAILD:
            return {
                ...state,
                isLoading: false,
                userInfo: {},
                errMessage: '请求有误'
            }
        default:
            return state;
    }
}

export default userInfo_fn;