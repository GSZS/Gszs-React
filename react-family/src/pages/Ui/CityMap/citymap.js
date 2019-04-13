// citymap.js

import React,{Component} from 'react'

// antd
import {Table, Card, Col, Row} from 'antd'

// less
import './citymap.less'

// request
import axios from '../../../components/axios/axios'

class CityMap extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.request = this.request.bind(this)
    }

    componentDidMount(){
        this.request()
    }

    //获取数据渲染表格
    request(){
        axios.ajax({
            method: 'get',
            url: '/createCity',
            data: {
                isShowing: true
            }
        }).then((data, error) => {
            if(data.status === 200){
                console.log(data.data.city_list);
                this.setState({
                    dataSource: data.data.city_list
                })
            }
        })
    }


    render(){

        // 列数据
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id'
            },
            {
                title: '城市',
                dataIndex: 'cityname'
            },
            {
                title: '票运模式',
                dataIndex: 'ticketMode'
            },
            {   
                title: '授权加盟商',
                dataIndex: 'authorization'
            },
            {
                title: '城市管理员',
                dataIndex: "cityControl",
                    
            },
            {
                title: '城市开通时间',
                dataIndex: 'cityOpenTime'
            },
            {
                title: '操作时间',
                dataIndex: 'operateTime'
            },
            {
                title: '操作人',
                dataIndex: 'operatePeople'
            },
        ]


        return(
            <React.Fragment>
                <div className="cityMapBox">
                    <Card title="城市管理">
                        <Table
                            columns = {columns}
                            dataSource = {this.state.dataSource}
                            
                        />
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default CityMap