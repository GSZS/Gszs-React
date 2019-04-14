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
import Register from 'pages/Ui/Register/register'
import BasicTable from 'pages/Ui/Table/table'
import CityMap from 'pages/Ui/CityMap/citymap'
import Order from 'pages/Order/order'
import Common from './Common'
import PageOne from './pages/OtherPages/page1'

// config
import MenuConfig from '../src/components/config/menulist'


class Grouter extends Component{
    render(){
        return(
            <Router>
                <App>
                    <Switch>
                    <Route path='/' render={() => 
                        <Admin>
                            <Switch>
                                <Route path='/admin' component={Home} />
                                <Route path='/ui/button' component={Button} />
                                <Route path='/ui/date' component={Date} />
                                <Route path='/ui/card' component={Card} />
                                <Route path='/form/lowform' component={Form} />
                                <Route path='/form/register' component={Register} />
                                <Route path='/table/lowtable' component={BasicTable} />
                                <Route path='/controlcity' component={CityMap} />
                                <Route path='/order' component={Order} />
                                <Route component={Nomatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route path='/common' render={() => 
                        <Common>
                            <Route path='/common/order/detail/:orderid' component={PageOne} />
                        </Common>
                    } />
                </Switch>
                </App>
            </Router>
        )
    }
}

export default Grouter