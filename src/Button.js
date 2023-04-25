import React from "react"
import { Component } from 'react';
import './App.css';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    render() {
        return (<button
            value={this.props.value}
            onClick={(e) => this.props.onClick(e)}
            className={this.props.className}
        style={this.props.value=='CapsLK'?(this.props.capsLkOn?{color: 'red'}:{}):{}}>
            {this.props.value}</button>);
    }
}
    
export default Button;
