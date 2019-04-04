// Home.js

import React,{Component} from 'react'

// antd
import {Row, Col} from 'antd'

// home.less
import './home.less'

class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row>
                <Col span={24}>
                    <div className="homeBox">
                        <div className="mainContent">
                            <span>孤独，是给你思考自己的时间，在一个人的日子里，你要做的只有一件事，把自己变得优秀。</span>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Home