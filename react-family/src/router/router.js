//TODO: React-route(要熟练)
import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from 'pages/Home'
import Page1 from 'pages/Page'

const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to='/'>首页</Link></li>
                <li><Link to='/page1'>Page2</Link></li>
            </ul>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/page1' component={Page1}/>
            </Switch>
        </div>
    </Router>
)

export default getRouter