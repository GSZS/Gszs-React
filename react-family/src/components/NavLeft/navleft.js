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

    componentWillMount(){
        const menuState = this.renderMenu(MenuConfig)
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
                                <Menu theme="dark">
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