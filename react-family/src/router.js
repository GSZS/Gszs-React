// router.js

import React,{Component} from 'react'

import {HashRouter as Router, Route} from 'react-router-dom'

// App
import App from './App'

// 所需路由组件
import Admin from 'components/admin'


class Grouter extends Component{
    render(){
        return(
            <Router>
                <App>
                    <Route path='/admin' component={Admin} />
                </App>
            </Router>
        )
    }
}

export default Grouter