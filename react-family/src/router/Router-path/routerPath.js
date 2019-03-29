// 路由导航路径

import {Link} from 'react-router-dom';
import React,{Component} from 'react'

// antD
import {Row, Col} from 'antd'

// Less
import '../routerCss.less'

const RouterPath = () => (
    <Row type="flex" justify="start" gutter={10}>
        <Col span={2}>
            <div className="gutter-box">
                <Link to="/">首页</Link>
            </div>
        </Col>
        <Col span={2} >
            <div className="gutter-box">
                <Link to="/demo1">Demo1</Link>
            </div>
        </Col>
        <Col span={2} ><Link to="/userinfo">UserInfo</Link></Col>
        <Col span={2} ><Link to='/Antd'>Antd</Link></Col>
    </Row>
)

export default RouterPath;