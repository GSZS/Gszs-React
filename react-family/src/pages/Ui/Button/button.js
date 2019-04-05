// Button

import React,{Component} from 'react'

// antD
import {Button, Card, Menu, Dropdown, Icon} from 'antd'

// less
import './button.less'


class Gbutton extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.setState({
            loading: false
        })
    }

    // 交互
    ControlHandle(){
        const {loading} = this.state
        this.setState({
            loading: !loading
        })
    }    

    render(){
        
        const menuButton = (<Menu>
            {[...Array(3)].map((item, i) => (
                <Menu.Item key={i}>{i+1}-Button</Menu.Item>
            ))}
        </Menu>)

        const ButtonGroup = Button.Group;

        return(
            <React.Fragment>
                <div className="buttonBox">
                    <Card title="基础按钮" className="basicButton">
                        <Button type="primary"> 按钮1 </Button>
                        <Button type="danger"> 按钮2 </Button>
                        <Button type="success"> 按钮3 </Button>
                        <Button> 按钮4 </Button>
                    </Card>
                    <Card title="高级按钮" className="tallButton">
                        <Button type="primary" icon="search"> 按钮1 </Button>                    
                        <Button type="primary" shape="circle" icon="search"></Button>                    
                        <Button type="primary" shape="circle" icon="download" size="large"></Button>   
                        <Button type="primary" icon="search" disabled> 按钮2 </Button>                    
                        <Button type="primary" icon="search" loading> 按钮3 </Button>                    

                        {/* 下拉按钮 */}
                        <Dropdown overlay={menuButton}>
                            <Button>
                                下拉按钮 <Icon type="down" />
                            </Button>
                        </Dropdown>

                        {/* 按钮组 */}
                        <ButtonGroup>
                            <Button type="primary">1-Button</Button>
                            <Button type="primary">2-Button</Button>
                            <Button type="primary">3-Button</Button>
                        </ButtonGroup>

                    </Card>
                    <Card title="交互按钮" className="interactionButton">
                        {/* 点击停止加载 */}
                        <Button loading={this.state.loading} shape="circle" type="primary" onClick={this.ControlHandle.bind(this)}></Button>
                    </Card>
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Gbutton