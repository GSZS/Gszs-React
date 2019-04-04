// Footer.js

import React,{Component} from 'react'

// antD
import {Row, Col} from 'antd'

// footer.less
import './footer.less'

class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Row>
                <Col span={24}>
                    <div className="footerBox">
                        <span>Gszs : life philosophy Happy, healthy, plain.</span>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Footer