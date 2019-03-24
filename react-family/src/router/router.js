import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from 'pages/Home';
import Page1 from 'pages/Page';
import UserInfo from '../pages/userInfo/userInfo';
import A_date from '../pages/Antd/demo01'

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
                <li><Link to='/Antd'>Antd</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/userinfo" component={UserInfo}/>
                <Route path="/Antd" component={A_date} />
            </Switch>
        </div>
    </Router>
);

export default getRouter;