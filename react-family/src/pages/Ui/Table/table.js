// Table.js

import React,{Component} from 'react'

// antD
import {Card, Table, Modal} from 'antd'

// less
import './table.less'

// request
import axios from '../../../components/axios/axios'

class BasicTable extends Component{
    constructor(props){
        super(props)
        this.ClickTableHandle = this.ClickTableHandle.bind(this)
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

    // 点击表格行命中单选框
    ClickTableHandle(record, index){
        let selectKeys = [index] // 配合如果rowSelection可能为checkbox
        Modal.info({
            title: '命中',
            content: `用户名: ${record.username} - 地址: ${record.adress}`
        })
        // setState selectKeys selectItem
        this.setState({
            selectedRowKeys: selectKeys,
            selecrItem: record
        })
    }

    render(){
        const selectedRowKeys = this.state.selectedRowKeys;
        // 表格配置
        const rowSelection = {
            type: 'radio',
            selectedRowKeys: selectedRowKeys
        }

        // 列描述对象
        const columns = [
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '年龄',
                dataIndex: 'years'
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
                        '1': '厦门思明区',
                        '2': '厦门大学',
                        '3': '南普陀托寺',
                        '4': '思明区',
                        '5': '鼓浪屿',
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
            </React.Fragment>
        )
    }
}

export default BasicTable