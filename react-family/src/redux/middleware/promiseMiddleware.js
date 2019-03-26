// 请求中间件
import axios from 'axios'

export default store => next => action => {
    const {dispatch, getState} = store;
    
    // 如果是函数直接运行跳过
    if(typeof action === 'function'){
        action(dispatch, getState)
        return;
    }

    // 解析action
    console.log('action->',action);
    const {
        promise,
        types,
        afterSuccess,
        ...rest
    } = action;

    if(!action.promise){
        return next(action);
    }

    // 解析types
    const [
        REQUEST,
        SUCCESS,
        FALID
    ] = types;

    // 请求流程
    next({
        ...rest,
        type: REQUEST
    });
    const onSuccess = result => {
        next({
            ...rest,
            result,
            type: SUCCESS
        })
        console.log(result);
        if(afterSuccess){
            afterSuccess(dispatch, getState, result)
        }
    }
    const onReject = error => {
        next({
            ...rest,
            error,
            type: FALID
        })
    }

    return promise(axios).then(onSuccess,onReject).catch(error => {
        console.log(`捕获错误: ${error}`);
        onReject(error)
    })
}
