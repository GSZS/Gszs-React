// 404

import React, { Component } from 'react';

class Nomatch extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                <div className="notmatchBox" style={{ fontSize:30+'px' }}>
                    <span>404</span>
                </div>
            </React.Fragment>
        )
    } 
}

export default Nomatch