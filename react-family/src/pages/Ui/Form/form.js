// form.js

import React,{Component} from 'react'

// antD
import {Form, Button, Card, Input, message, Checkbox} from 'antd'
const Formitem = Form.Item

// less
import './form.less'
import { getFileItem } from 'antd/lib/upload/utils';

class Gform extends Component{
    constructor(props){
        super(props)
    }
    
    // 规则验证函数
    verifyHandle(){
        const userInfo = this.props.form.getFieldsValue(); //获取被注册的表单值
        this.props.form.validateFields((error, values) => { // validateFields校验表单值
            if(!error){
                message.success(`恭喜你 ${userInfo.username},表单验证通过`)
            }
        })
    }


    render(){

        const {getFieldDecorator } = this.props.form

        return(
            <React.Fragment>
                <Card 
                    className="formBox-1"
                    title="基础表单"
                >
                    <Form layout="inline">
                        <Formitem>
                            <Input type="text" placeholder="请输入用户名"/>
                        </Formitem>
                        <Formitem>
                            <Input type="password" placeholder="请输入密码"/>
                        </Formitem>
                        <Formitem>
                            <Button type="primary">登录</Button>
                        </Formitem>
                    </Form>
                </Card>
                <Card
                    className="formBox-2"
                    title="交互表单"
                >
                 <Form className="form-2">
                     <Formitem>
                         {getFieldDecorator('username',{
                             rules: [
                                {
                                    required: true,
                                    message: '请输入你的用户名',
                                },
                                {
                                    min: 5,
                                    max: 10,
                                    message: '长度必需5-10'   
                                },
                                {
                                    pattern: /^\w$/ig,
                                    message: '用户名不符合规则'
                                }
                            ]
                         })(
                             <Input type="text" placeholder="用户名"/>
                         )}
                     </Formitem>
                     <Formitem>
                         {getFieldDecorator('userpassword', {
                             rules: [{
                                 required: true,
                                 message: '请输入你的密码',
                                 initialValue: ''
                             }]
                         })(
                             <Input type="password" placeholder="密码"/>
                         )}
                     </Formitem>
                    <Formitem>
                        {
                            getFieldDecorator('rememberPassword',{
                                valuePropName: 'checked',
                                initialValue:true
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )
                        }
                        <a href="#" className="forgetPassword" style={{float: 'right'}}>忘记密码</a>
                    </Formitem>
                    <Formitem>
                        {
                            getFieldDecorator('readRule', {
                                initialValue
                            })
                        }
                    </Formitem>
                    <Formitem>
                        <Button type="primary" onClick={this.verifyHandle.bind(this)}>登录</Button>
                    </Formitem>
                 </Form>
                </Card>
            </React.Fragment>
        )
    }
}

export default Form.create()(Gform) // 注册封装表单