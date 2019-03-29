// Reducer.js

const initState = {
    value: 0
}

const counterReducer = (state=initState, action) => {
    switch(action.type){
        case 'Plus':
            return {
                ...state,
                value: state.value + 1
            }
        case 'Minus':
            return {
                ...state,
                value: state.value - 1
            }
        case 'Reload':
            return {
                ...state,
                value: 0
            }
        default:
            return state
    }
} 

export default counterReducer