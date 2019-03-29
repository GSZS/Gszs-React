/* 路由表 */

import React,{Component} from 'react'
import Bundle from '../bundle'
import {Route, Switch} from 'react-router-dom';


// 按需加载
import Home from 'bundle-loader?lazy&name=home!pages/Home'
import Demo1 from 'bundle-loader?lazy&name=demo1!demo/demo01/counter'
import Demo2 from 'bundle-loader?lazy&name=demo2!demo/demo02/date'
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
        <Route path="/demo2" component={createComponent(Demo2)}/>
        <Route path="/Antd" component={createComponent(A_date)} />
    </Switch>
)

export default RouterTable