// order.js

import React,{useState, useEffect} from 'react'

// less
import './order.less'

// antd
import {Table, Card, Icon, Input, DatePicker, Form, Select, Button} from 'antd'
import Axios from 'axios';

// request
import axios from '../../components/axios/axios'


// 使用新属性
const Order = (props) => {

    const [dataSource, setstate] = useState([])
    
    // Hooks
    useEffect(() => {
        // console.log('hello');
        axios.ajax({
            url: '/order',
            method: 'get'
        }).then((data, err) => {
            if(data.status === 200){
                console.log(data.data.data);
                setstate(data.data.data)
            }
        })
    },[])

    const handleOpenWindow = () => {
        window.open('/#/common/order/detail/1338', 'target')
    }

    // Form
    const FormItem = Form.Item,
          {getFieldDecorator} = props.form,
          Option = Select.Option,
          {RangePicker} = DatePicker;

    // columns
    const columns = [
        {
            title: "id",
            dataIndex: "id"
        },
        {
            title: "订单编号",
            dataIndex: 'order_sn'
        },
        {
            title: "单车编号",
            dataIndex: 'bike_sn'
        },
        {
            title: "用户id",
            dataIndex: 'user_id'
        },
        {
            title: "用户名称",
            dataIndex: 'user_name'
        },
        {
            title: "电话号码",
            dataIndex: 'mobile'
        },
        {
            title: "距离",
            dataIndex: 'distance'
        },
        {
            title: "花费时间",
            dataIndex: 'total_time'
        },
        {
            title: "状态",
            dataIndex: 'status'
        },
        {
            title: "开始时间",
            dataIndex: 'start_time'
        },
        {
            title: "结束时间",
            dataIndex: 'end_time'
        },
        {
            title: "总消费",
            dataIndex: 'total_fee'
        },
        {
            title: "实质消费",
            dataIndex: 'user_pay'
        }
    ]


    return(
        <React.Fragment>
            <div className="orderBox">
                <Card title="订单管理">
                    <Form layout="inline">
                        <FormItem label="城市">
                            {
                                getFieldDecorator('city',{
                                    initialValue: 2
                                })(
                                    <Select>
                                        <Option value={1}> 北京 </Option>
                                        <Option value={2}> 上海 </Option>
                                        <Option value={3}> 深圳 </Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="订单时间">
                            <RangePicker/>
                        </FormItem>
                        <FormItem label="订单状态">
                            {
                                getFieldDecorator('city',{
                                    initialValue: 1
                                })(
                                    <Select>
                                        <Option value={1}> 全部 </Option>
                                        <Option value={2}> 有 </Option>
                                        <Option value={3}> 无 </Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            <Button type="primary">查询</Button>
                            <Button type="danger">重置</Button>
                            <Button type="primary" onClick={handleOpenWindow}>打开新页面</Button>
                        </FormItem>
                    </Form>
                    <Table 
                        bordered
                        columns = {columns}
                        dataSource = {dataSource}
                    />
                </Card>
            </div>        
        </React.Fragment>
    )
}

export default Form.create()(Order)