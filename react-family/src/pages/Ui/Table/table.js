// Table.js

import React,{Component} from 'react'

// antD
import {Card, Table, Modal, Button, message, Badge} from 'antd'

// less
import './table.less'

// request
import axios from '../../../components/axios/axios'

class BasicTable extends Component{
    constructor(props){
        super(props)
        this.ClickTableHandle = this.ClickTableHandle.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.state = {} // 处理异步API情况
    }

    componentWillMount(){
        // 表格数据源
        axios.ajax({
            method: 'get',
            url: '/table/list',
            data: {
                isShowLoading: true
            },
        }).then((data, error)=>{
            if(data.status === 200){    
                this.setState({
                    dataSource: data.data.Result
                })
            }
        })
    }

    handleDelete(){
        let selectId = this.state.selectedRowKeys; // Array
        let storeid = []; // 存放被选中的按钮id
        selectId.map((item)=>{
            storeid.push(item)
        })
        Modal.confirm({
            title: `你确定要删除吗?`,
            content: `被删除的数据是: ${storeid.join(',')}`,
            onOk:() => {
                message.success('删除成功,即将刷新');
                // 同化
                axios.ajax({
                    method: 'get',
                    url: '/table/list',
                    data: {
                        isShowLoading: true
                    },
                }).then((data, error)=>{
                    if(data.status === 200){
                        this.setState({
                            dataSource: data.data.Result,
                            selectId: [],
                            selectItem: null
                        })
                    }
                })
            }
        })
    }

    // 升降序
    sortedHandle(pagination, filters, sorter){
        this.setState({
            sortOrder: sorter.order
        })
    }


    // 点击表格行命中单选框
    ClickTableHandle(record, index){
        let selectKeys = [index] // 配合如果rowSelection可能为checkbox
        Modal.info({
            title: '命中',
            content: `用户名: ${record.username} - 地t址: ${record.adress}`
        })
        // setState selectKeys selectItem
        this.setState({
            selectedRowKeys: selectKeys,
            selectItem: record
        })
    }

    render(){
        const selectedRowKeys = this.state.selectedRowKeys;
        // 表格配置
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: selectedRowKeys
        }
        
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys
                })
            }
        }

        // 列描述对象
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '年龄',
                dataIndex: 'years',
                sorter: (a,b)=>{
                    return a.years - b.years
                },
                sortOrder: this.state.sortOrder
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex){
                    return sex === 1? '男': '女'
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'adress',
                render(adress){
                    let config = {
                        '1': <Badge status="success" text="厦门思明区" />,
                        '2': <Badge status="processing" text="厦门大学" />,
                        '3': <Badge status="warning" text="南普陀寺" />,
                        '4': <Badge status="default" text="思明区" />,
                        '5': <Badge status="error" text="鼓浪屿" />,
                        '6': '环岛路',
                        '7': '曾厝垵',
                        '8': '中山路',
                        '8': '中山路',
                        '8': '中山路'
                    }
                    return config[adress]
                }
            },
            {
                title: '电话',
                dataIndex: 'phonenumber'
            }
        ]

        return(
            <React.Fragment>
                <Card title="radio表格">
                    <div className="tableBox">
                        <Table
                            columns = {columns}
                            dataSource = {this.state.dataSource}
                            rowSelection={rowSelection}
                            onRow={(record,index)=>{
                                return {
                                    onClick: () => {
                                        /**
                                         * record: 该列下的行值
                                         */
                                        this.ClickTableHandle(record, index)
                                    }
                                }
                            }}
                        />
                    </div>
                </Card>
                
                <Card title="checkBox表格">
                    <div>
                        <Button type="primary" onClick={this.handleDelete}>删除</Button>
                    </div>
                    <div className="checkTableBox">
                        <Table
                            columns={columns}
                            dataSource = {this.state.dataSource}
                            rowSelection = {rowCheckSelection}
                            onChange = {this.sortedHandle.bind(this)}
                        />
                    </div>
                </Card>
            </React.Fragment>
        )
    }
}

export default BasicTable