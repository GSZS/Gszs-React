// 统一处理跨域请求

import Jsonp from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'

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
    
    // ajax
    static ajax(options){
        return new Promise((resolve, reject) => {
            let loading;
            if(options.data && options.data.isShowLoading !== false){
                loading = document.querySelector('#ajaxLoading');
                document.querySelector('#loadingImg').src=require('../../assets/loading.gif')
                loading.style.display = 'block';
            }
            let basicUrl = 'https://www.easy-mock.com/mock/5ca96ed4a0b46e022020aeca/Gszsreactapi'            
            axios({
                method: options.method,
                baseURL: basicUrl,
                url: options.url,
                params: (options.data && options.data.params) || '',
                timeout: 5000
            }).then((response) => {
                // 成功接收响应
                if(options.data && options.data.isShowLoading !== false){
                    loading = document.querySelector('#ajaxLoading');
                    loading.style.display = 'none';
                }

                if(response.status == '200'){
                    if(response.data.code == 1){
                         return resolve(response)
                    }else{
                        // 模态框提示错误信息
                        Modal.info({
                            title: '你还未登录',
                            content: response.data.message
                        })                       
                    }
                }else{
                    return reject(response.data)
                }
            })
        })
    }
}