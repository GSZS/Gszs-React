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
        return Math.random() * 5
    }

    render(){

        // Card内容信息
        const Meta = Card;

        return(
            <React.Fragment>
                <div className={'cardBox'}>
                    <Row type="flex" justify="space-around">
                        {/* <Col span={8}>
                            <Card hoverable cover={<img src="./img/img1.jpg" alt="404" />}>
                                <Meta title="Movie-1" description="https://github.com/GSZS/Gszs-React"/>
                                <Rate allowHalf defaultValue={this.getStar()} />
                            </Card>  
                        </Col>
                        <Col span={8}>
                            <Card hoverable cover={<img src="./img/img2.png" alt="404" />}>
                                <Meta title="Movie-2" description="https://github.com/GSZS/Gszs-React"/>
                                <Rate allowHalf defaultValue={this.getStar()} />
                            </Card>  
                        </Col>
                        <Col span={8}>
                            <Card hoverable cover={<img src="./img/img3.png" alt="404" />}>
                                <Meta title="Movie-3" description="https://github.com/GSZS/Gszs-React"/>
                                <Rate allowHalf defaultValue={this.getStar()} />
                            </Card>  
                        </Col> */}

                        
                        [...Array(3)].map((v,i) => {
                            <Col span={8}>
                                <Card hoverable cover={<img src={`./img/img${i}.jpg`} alt="404"/>}>
                                    <Meta title="Movie-2" description="https://github.com/GSZS/Gszs-React"/>
                                    <Rate allowHalf defaultValue={this.getStar()} />
                                </Card>  
                            </Col>
                        })


                    </Row>
                    <Row>

                    </Row>
                </div>
            </React.Fragment>
        )
    }

}