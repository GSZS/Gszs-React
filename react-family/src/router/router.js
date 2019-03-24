import React from 'react';
import Bundle from './bundle'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Home from 'bundle-loader?lazy&name=home!pages/Home'
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page'
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
                <Route exact path="/" component={createComponent(Home)}/>
                <Route path="/page1" component={createComponent(Page1)}/>
                <Route path="/userinfo" component={createComponent(UserInfo)}/>
                <Route path="/Antd" component={createComponent(A_date)} />
            </Switch>
        </div>
    </Router>
);

export default getRouter;