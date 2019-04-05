// Card.js

import React,{Component} from 'react'

// antd
import {Card, Icon,  Avatar} from 'antd'

//less
import './card.less'

class Gcard extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {Meta} = Card

        return(
            <React.Fragment>
                <div className="cardBox">
                <Card
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title="Card title"
                    description="This is the description"
                    />
                </Card>,
                </div>
            </React.Fragment>
        )
    }
}

export default Gcard