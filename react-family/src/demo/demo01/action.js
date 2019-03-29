// action.js

export const ControlCounter = (type) => {
    if(type === 'minus'){
        return {
            type: 'Minus',
        }
    }else if(type === 'plus'){
        return{
            type: 'Plus',
        }
    }else{
        return{
            type: 'Reload'
        }   
    }
}