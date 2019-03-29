// demo2 - action

export const _ControlSwitch = (type) => {
    
    if(type == true){
        return {
            type: 'ON'
        }
    }else if(type == false){
        return {
            type: 'OFF'
        }
    }
}