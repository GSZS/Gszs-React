// navleft.js

import React,{Component} from 'react'

// antD
import {Row, Col, Menu} from 'antd'
const SubMenu = Menu.SubMenu

// menu
import MenuConfig from '../config/menulist'

// less
import './navLeft.less'

// react-router-dom
import {NavLink} from 'react-router-dom'

class NavLeft extends Component{
    constructor(props){
        super(props);
        this.renderMenu = this.renderMenu.bind(this);
    }

    handleClick(item){
        console.log(item.item.props.children.props.children);
        const currentStatus = item.key
        this.setState({
            currentStatus
        })
    }

    componentWillMount(){
        const menuState = this.renderMenu(MenuConfig)
        // 处理路由首次进入被选中        
        const currentStatus = window.location.hash.replace(/#|\?.*$/ig,'')
        this.setState({
            currentStatus
        })        

        this.setState({
            menuState
        })
    }

    //递归渲染菜单
    renderMenu(data){
        return data.map((item, i) => {
            if(item.children){
                return (
                    // 二级
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return(<Menu.Item key={item.key}>
                        <NavLink to={item.key}>{item.title}</NavLink>
                    </Menu.Item>)
        })
            
    }


    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col span={24} className="navcol">
                        <div className="navbox">
                            <div className="navlogo">
                                <img src={require('../../assets/Antd.jpg')} alt="404" />
                                <span>Gszs-React</span>
                            </div>
                        </div>
                        <div className="navmenu">
                            <div className="navlist">
                                <Menu 
                                    selectedKeys = {[this.state.currentStatus]}
                                    theme="dark"
                                    onClick = {this.handleClick.bind(this)}
                                >
                                    {this.state.menuState}
                                </Menu>
                            </div>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default NavLeft;