import React from "react"
import { Component } from 'react';

class Text extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <span style={ this.props.innerStyle }>{this.props.innerText}</span>
        )
    }
}
    //style={{ color: value }}
export default Text;

