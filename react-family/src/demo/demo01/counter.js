// 计数器

import {Button, Card, Icon} from 'antd'
import React,{Component} from 'react'
import {connect} from 'react-redux'

// antD
import {ControlCounter} from './action'

// less
import './counter.less'

class Counter extends Component{

    render(){
        const {value} = this.props
        return(
            <React.Fragment>
                <Card
                    style={{ width: 300 }}
                    title={'增减器'}
                    actions={
                        [
                            <Icon type="plus" onClick={()=>(this.props.ControlCounter('plus'))} />, 
                            <Icon type="reload" onClick={()=>(this.props.ControlCounter('reload'))} />, 
                            <Icon type="minus" onClick={()=>(this.props.ControlCounter('minus'))} />
                        ]
                    }
                >
                <span className="Counter_Value"> {value} </span>
                </Card>,
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {    
        value: state.value
    }
}


export default connect(mapStateToProps, {ControlCounter})(Counter)