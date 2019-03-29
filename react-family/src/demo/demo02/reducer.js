// _Date.js

const initState = {
    switchStatus: false
}

const DateReducer = (state=initState, action) => {
    switch(action.type){
        case 'ON':
            return {...state, switchStatus: true}
        case 'OFF':
            return {...state, switchStatus: false}
        default:
            return state
    } 
}

export default DateReducer
