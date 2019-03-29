/* 路由表 */

import React,{Component} from 'react'
import Bundle from '../bundle'
import {Route, Switch} from 'react-router-dom';


// 按需加载
import Home from 'bundle-loader?lazy&name=home!pages/Home'
import Demo1 from 'bundle-loader?lazy&name=demo1!demo/demo01/counter'
import UserInfo from 'bundle-loader?lazy&name=userinfo!pages/userInfo/userInfo'
import A_date from 'bundle-loader?lazy&name=a_date!pages/Antd/demo01'

const Loading = function () {
    return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

const RouterTable = () => (
    <Switch>
        <Route exact path="/" component={createComponent(Home)}/>
        <Route path="/demo1" component={createComponent(Demo1)}/>
        <Route path="/userinfo" component={createComponent(UserInfo)}/>
        <Route path="/Antd" component={createComponent(A_date)} />
    </Switch>
)

export default RouterTable