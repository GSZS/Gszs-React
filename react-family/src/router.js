// router.js

import React,{Component} from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

// App
import App from './App'

// 所需路由组件
import Admin from 'components/admin'
import Home from 'pages/Home/home'
import Button from 'pages/Ui/Button/button'
import Nomatch from 'pages/Nomatch/nomatch'
import Date from 'pages/Ui/Date/date'
import Card from 'pages/Ui/Card/card'
import Form from 'pages/Ui/Form/form'


// config
import MenuConfig from '../src/components/config/menulist'


class Grouter extends Component{
    render(){
        return(
            <Router>
                <App>
                    <Route path='/admin' render={() => 
                        <Admin>
                            <Switch>
                                <Route path='/admin' component={Home} exact />
                                <Route path='/admin/ui/button' component={Button} />
                                <Route path='/admin/ui/date' component={Date} />
                                <Route path='/admin/ui/card' component={Card} />
                                <Route path='/admin/form/lowform' component={Form} />
                                <Route component={Nomatch} />
                            </Switch>   
                        </Admin>
                    } />
                </App>
            </Router>
        )
    }
}

export default Grouter