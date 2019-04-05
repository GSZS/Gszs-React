// 组装组件

import React, {Component} from 'react'

// 组件
import NavLeft from './NavLeft/navleft'
import Gheader from './Header/header'
import Footer from './Footer/Footer'
import Home from 'pages/Home/home'

// antD
import {Row, Col} from 'antd'

class Gadmin extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row>
                <Col span={3}>
                    <NavLeft/>
                </Col>
                <Col span={21}>
                    <Gheader/>
                    {this.props.children}
                    <Footer/>
                </Col> 
            </Row>
        )
    }
}

export default Gadmin