// 通用页面路由

import React,{Component} from 'react'
import Header from './components/Header/header'

const CommonRoute = (props) => (
    <React.Fragment>
        <Header secondRoute />
        {props.children}
    </React.Fragment>
)

export default CommonRoute