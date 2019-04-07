import React,{Component} from 'react'

// less
import './App.less'

class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default App 