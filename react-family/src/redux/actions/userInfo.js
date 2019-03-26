// 创建请求系列的action.js

export const GET_USER_INFO_REQUEST = 'userinfo/GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'userinfo/GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAILD = 'userinfo/GET_USER_INFO_FAILD'

// const getUserInfoRequest = () => {
//     return {
//         type: GET_USER_INFO_REQUEST,
//     }
// }

// const getUserInfoSuccess = (userInfo) => {
//     return {
//         type: GET_USER_INFO_SUCCESS,
//         userInfo: userInfo,
//     }
// }

// const getUserInfoFaild = () => {
//     return {
//         type: GET_USER_INFO_FAILD,
//     }
// }

// export const getUserInfo = () => {
//     return (dispatch) => {
//         // 开始请求前
//         dispatch(getUserInfoRequest())

//         return fetch('http://localhost:8080/api/user.json')
//         .then(response => response.json())
//         .then(json => {
//             // 获取数据
//             dispatch(getUserInfoSuccess(json))
//         }).catch(() => {
//             // 捕获错误
//             dispatch(getUserInfoFaild())
//         })
//     }
// }

export function getUserInfo(){
    return{
        types: [GET_USER_INFO_REQUEST,GET_USER_INFO_SUCCESS,GET_USER_INFO_FAILD],
        promise: axios => axios.get('http://localhost:8080/api/user.json')
    }
}

