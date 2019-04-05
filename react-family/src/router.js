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


// config
import MenuConfig from '../src/components/config/menulist'


class Grouter extends Component{
    render(){
        return(
            <Router>
                <App>
                    <Route path='/admin' render={() => 
                        <Admin>
                            <Route path='/admin' component={Home} exact />
                            <Route path='/admin/ui/button' component={Button} />
                            <Route component={Nomatch} />
                        </Admin>
                    } />
                </App>
            </Router>
        )
    }
}

export default Grouter