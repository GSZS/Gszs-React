// register.js

import React,{Component} from 'react'

// antd
import {
          Button, Switch, message, Icon, Form, 
          Input, Checkbox, Radio, DatePicker, Upload,
          Card, InputNumber, Select, TimePicker
    } from 'antd'

// less
import './register.less'

class Register extends Component{
    constructor(props){
        super(props)
        this.uploadHandle = this.uploadHandle.bind(this)
        this.state = {
            loading: false
        }
    }


     // 规则验证函数
     verifyHandle(){
        const userInfo = this.props.form.getFieldsValue(); //获取被注册的表单值
        console.log(JSON.stringify(userInfo))
        this.props.form.validateFields((error, values) => { // validateFields校验表单值
            if(error){
                message.error(`表单提交失败,请检查输入是否正确!`)
            }
        })
    }

    // 在上传图像之前做一些限制
    beforeUpload(file){
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('你应该上传JPG格式图片');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('图片大小超过2MB');
        }
        return isJPG && isLt2M;
    }

    // 上传
    uploadHandle(info){
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
          }
          if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
              imageUrl,
              loading: false,
            }));
          }
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    render(){

        // 辅助
        const FormItem = Form.Item,
              { getFieldDecorator } = this.props.form,
              RadioGroup = Radio.Group,
              {TextArea} = Input;

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

        // 响应式2
        const SettingResponse_offset ={
            wrapperCol: {
                xs: 24,
                sm: {
                    offset: 4,
                    span: 10
                }
            }
        }

        const imageUrl = this.state.imageUrl;
        
        // 上传
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        )


        return(
            <React.Fragment>
                <Card title="注册表单" className="registerBox">
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
                        <FormItem label="是否已婚" {...SettingResponsive}>
                            {
                                getFieldDecorator('marry')(
                                    <Switch checkedChildren="是" unCheckedChildren="否" defaultChecked />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...SettingResponsive}>
                            {
                                getFieldDecorator('birthday')(
                                    <DatePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...SettingResponsive}>
                            {
                                getFieldDecorator('location',{
                                    initialValue: '福建厦门鼓浪屿'
                                })(
                                    <TextArea autosize={
                                        {
                                            minRows: 4,
                                            maxRows: 8
                                        }
                                    } />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...SettingResponsive}>
                            {
                                getFieldDecorator('earlyTime')(
                                    < TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="头像选择" {...SettingResponsive}>
                            {
                                getFieldDecorator('selectAvator')(
                                    <Upload
                                        name="avator"
                                        listType='picture-card'
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        beforeUpload={this.beforeUpload}
                                        onChange={this.uploadHandle}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="头像" /> : uploadButton}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...SettingResponse_offset}>
                            {
                                getFieldDecorator('readRule',{
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>我已经阅读完此规则</Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...SettingResponse_offset}>
                            <Button type="primary" onClick={this.verifyHandle.bind(this)}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </React.Fragment>
        )
    }
}



export default Form.create()(Register)