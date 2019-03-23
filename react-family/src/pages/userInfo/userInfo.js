import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from '../../redux/actions/userInfo'

class UserInfo extends Component {

    render() {
        const {isLoading, userInfo ,errMessage} = this.props;
        
        console.log(this.props.isLoading);
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errMessage ? errMessage :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intro}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.userInfo,   // 监视
        isLoading: state.isLoading,
        errMessage: state.errMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        UserInfo: () => {
            dispatch(getUserInfo)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);