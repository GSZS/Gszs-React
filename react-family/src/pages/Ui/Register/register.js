// register.js

import React,{Component} from 'react'

// antd
import {Button, Switch, message, Icon, Form, Input, Checkbox, Radio, DatePicker, Upload, Card, InputNumber, Select} from 'antd'

// less
import './register.less'

class Register extends Component{
    constructor(props){
        super(props)
    }

     // 规则验证函数
     verifyHandle(){
        const userInfo = this.props.form.getFieldsValue(); //获取被注册的表单值
        this.props.form.validateFields((error, values) => { // validateFields校验表单值
            if(error){
                message.error(`表单提交失败,请检查输入是否正确!`)
            }
        })
    }

    render(){

        // 辅助
        const FormItem = Form.Item
        const { getFieldDecorator } = this.props.form
        const RadioGroup = Radio.Group

        // 响应式
        const SettingResponsive = {
            labelCol: {
                xs: 24, // <576px
                sm: 4,  // >=576px
            },
            wrapperCol: {
                xs: 24,
                sm: 10
            }
        }

        return(
            <React.Fragment>
                <Card title="注册表单">
                    <Form>
                        <FormItem label="用户名" {...SettingResponsive}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 2,
                                            max: 8,
                                            message: '长度必须为2-8'
                                        },
                                        {
                                            pattern: /^\w+$/ig,
                                            message: '输入格式不正确'
                                        }
                                    ]      
                                })(
                                    <Input type="text" placeholder="请输入用户名"  />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...SettingResponsive}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        },
                                        {
                                            min: 6,
                                            max: 18,
                                            message: '长度必须为6-18'
                                        },
                                        {
                                            pattern: /^\w+$/ig,
                                            message: '输入格式不正确'
                                        }
                                    ]      
                                })(
                                    <Input type="password" placeholder="请输入密码"  />                                   
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...SettingResponsive}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...SettingResponsive}>
                            {
                                getFieldDecorator('years',{
                                    initialValue: 18
                                })(
                                    <InputNumber /> 
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...SettingResponsive}>
                            {
                                getFieldDecorator('nowStatus',{
                                    initialValue: '2'
                                })(
                                    <Select>
                                        <Option value="1">那些年浪子</Option>
                                        <Option value="2">青春年华</Option>
                                        <Option value="3">风华正茂</Option>
                                        <Option value="4">秋华</Option>
                                        <Option value="5">忆年华</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...SettingResponsive}>
                            {
                                getFieldDecorator('hobby',{
                                    initialValue: ['2','3']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">CSGO</Option>
                                        <Option value="2">海贼王</Option>
                                        <Option value="3">旅游</Option>
                                        <Option value="4">前端</Option>
                                        <Option value="5">Python</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem {...SettingResponsive}>
                            <Button type="primary" onClick={this.verifyHandle.bind(this)}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </React.Fragment>
        )
    }
}



export default Form.create()(Register)