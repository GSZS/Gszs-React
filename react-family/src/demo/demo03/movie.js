// movie

import React,{Component} from 'react'

// antD
import {Row, Col, Card, Icon, Rate} from 'antd'

class Movie extends Component{
    constructor(props){
        super(props);
        this.getStar = this.getStar.bind(this);
    }

    // 获取随机Star
    getStar(){
        return Math.floor(Math.random() * 5);
    }

    render(){
        // Card内容信息
        const {Meta} = Card;

        return(
            <React.Fragment>
                <div className={'cardBox'}>
                    <Row type="flex" justify="space-around">
                        {[...Array(4)].map((v,i) => {
                            return(
                                <Col key={i} xs={{span:24}} sm={{span:24}} md={{span:24}} lg={{span:12}} xl={{span:8}} >
                                    <Card hoverable cover={<img src={require(`./img/img${i+1}.jpg`)} alt={'404'}/>} >
                                        <Meta title="Card title" description="Final Fantasy XV" />
                                        <p>King Regis, who oversees the land of Lucis, 
                                            commands his army of soldiers to protect the kingdom from the Niflheim 
                                            empire's plans to steal the sacred crystal.
                                        </p>
                                        <Rate allowHalf defaultValue={this.getStar()} />
                                    </Card>  
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default Movie;