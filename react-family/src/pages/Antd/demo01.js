// <Antd-01>
import React,{Component} from 'react';
import {LocaleProvider,message,DatePicker, Alert} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN'; // 设置文案为中文
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

export default class A_Date extends Component{
    constructor(props){
        super(props)
        this.ChangeDate = this.ChangeDate.bind(this)
        this.state = {
            date: null
        }
    }
    
    ChangeDate(date){
        // 格式化日期
        message.info(`你选择的日期是: ${date.format('YYYY-MM-DD')}`);
        this.setState({date: date})
    }

    render(){
        const {date} = this.state
        return(
            <LocaleProvider local={zhCN}>
                <div style={{ width: 400, margin: '100px auto' }}>
                    <DatePicker onChange={value => this.ChangeDate(value)}>
                        <div style={{marginTop: 20}}>
                            <Alert message={`当前日期：${date ? date.format('YYYY-MM-DD') : '未选择'}`} type="success" />
                        </div>
                    </DatePicker>
                </div>
            </LocaleProvider>
        )
    }
}
