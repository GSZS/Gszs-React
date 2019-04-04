// 统一处理跨域请求

import Jsonp from 'jsonp'

export default class Getweatherapi{ 
    static Jsonpweather(options){
        return new Promise((resolve, reject) => {
            Jsonp(options.url,{
                param: 'callback'
            }, (err, data)=>{
                if(err) reject(err)
                return resolve(data)
            })
        })
    }
}