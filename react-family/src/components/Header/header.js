// header.js

import React,{Component} from 'react'

// antD
import {Row, Col, Icon} from 'antd'

// less
import './header.less'

// 其他组件
import Utils from '../uitls/utils'

// 请求类组件
import Getweatherapi from '../axios/axios'

class Gheader extends Component{
    constructor(props){
        super(props)
        this.getWeatherApiData = this.getWeatherApiData.bind(this)
    }

    componentWillMount(){
        this.getnowtime = setInterval(()=>this.setState({
            time: Utils.dateFormate(new Date().getTime())
        }),1000)

        this.setState({
            name: 'Gszs',
        })
        this.getWeatherApiData();
    }

    componentWillUnmount(){
        clearInterval(this.getnowtime)
    }   

    getWeatherApiData(){
        const CryptoJS = require("crypto-js");

        const  funShun = 'https://api.seniverse.com/v3/weather/now.json?location=meizhou&',
               time = Math.round(new Date().getTime()/1000),
               str = "ts=" + time + "&ttl=30&uid=P_uDkCflf2FLstnN0",
               hash = CryptoJS.HmacSHA1(str, "S_Bc0xtogrdzsdgjC"),
               base = hash.toString(CryptoJS.enc.Base64),
               sig = encodeURIComponent(base),
               url = funShun  + str + "&sig=" + sig;

        // 获取心之天气数据
        Getweatherapi.Jsonpweather({
            url: url
        }).then((res, err) => {
            if(res){
                this.setState({
                    weather: res.results[0].location['name']+ '-' +res.results[0].now['text']
                })
            }else{
                console.log(err)
            }
        })
    }


    render(){
        return(
            <Row>
                <Col span={24}>
                    <div className="headerBox">
                        <div className="headerTop">
                            <div className="ooa">
                                <span>欢迎,  {this.state.name}</span>
                                <span><a href="#">退出</a></span>
                            </div>
                        </div>                    
                        <div className="headerMiddle-left">
                            <span>首页</span>
                        </div>
                        <div className="headerMiddle-right">
                            <span>{this.state.time}</span>
                            <span className="weather">{this.state.weather}</span>
                        </div>
                        {/* <div className="headercontent">
                            <span>欢迎Gszs , Kali-Linux天下第一</span>
                        </div> */}
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Gheader