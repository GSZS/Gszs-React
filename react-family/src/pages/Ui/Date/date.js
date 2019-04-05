// date.js

import React,{Component} from 'react'

// antD
import {DatePicker, Card} from 'antd'
import moment from 'moment'

// less
import './date.less'

class Gdate extends Component{
    constructor(props){
        super(props)
    }

    render(){

        const {MonthPicker, RangePicker, WeekPicker} = DatePicker

        // 用于自定义日期格式
        const dateFormat = 'YYYY-MM-DD';
        return(
            <React.Fragment>
                <div className="dateBox">
                    <Card className="basicDate" title="基础日期控件">
                        <DatePicker placeholder="选择日期" />
                        <MonthPicker placeholder="选择月份" />
                        <WeekPicker placeholder="选择周几" />
                        <RangePicker placeholder="日期选择器" />
                        <DatePicker placeholder="自定义日期格式" defaultValue={moment('2019/4/5', dateFormat)} format={dateFormat} />
                    </Card>
                </div>
            </React.Fragment>
        )        
    }
}

export default Gdate