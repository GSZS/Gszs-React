// date.js

import React,{Component} from 'react'
import {connect} from 'react-redux'

// action
import {_ControlSwitch} from './action'

// antD
import {Switch} from 'antd'

// date.less
import './date.less'

class _Date extends Component{

    constructor(props){
        super(props)
        this.ChangeTime = this.ChangeTime.bind(this)
        this.state = {
            time :  new Date().toString().split(' ')[4]
        }
    }

    ChangeTime(){
        this.setState({
            time: new Date().toString().split(' ')[4]
        })
    }

    componentDidMount(){
        this._Time = setInterval(this.ChangeTime,1000)
    }

    componentWillUnmount(){
        clearInterval(this._Time)
    }

    render(){
        return(
            <React.Fragment>
                <div className="DateBox">
                    <div className="ControlSwitch">
                        <Switch defaultChecked onChange={this.props._ControlSwitch} />
                    </div>
                    <div className="CircleDate">
                        <span>
                            {this.state.time}
                        </span>
                        <br/>
                        <span>
                            {
                                this.props.switchStatus ? new Date().toString().toString().substr(0,15) : ''
                            }
                        </span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        switchStatus: state.switchStatus
    }
}

export default connect(mapStateToProps, {_ControlSwitch})(_Date)