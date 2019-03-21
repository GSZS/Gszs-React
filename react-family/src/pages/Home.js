import React, {Component} from 'react'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.ChangeState = this.ChangeState.bind(this);
        this.state = { value : 0 };
    }

    ChangeState(){
        this.setState( state => ({
                value : state.value + 1
            })
        )
    }

    componentDidMount(){
        setInterval(() => {
            this.ChangeState()
        },1000)
    }

    render(){
        return(
            <div>
                {this.state.value}
            </div>
        )
    }
}