import React from "react"
import { Component } from 'react';
import './App.css';

const colors = ['Black', 'Red', 'Green', 'Blue', 'Pink', 'White'];

class ColorChange extends Component {
    constructor(props) {
        super(props);
    }

    handleColorClick = (event) => {
        let color = (event.target.value);
        this.props.chooseFunc(color);
    }


    render() {
        return(
            <select className="my-select-menu" onChange={(e) => this.handleColorClick(e)}>
                {colors.map(currentColor =>
                    <option key={currentColor} value={currentColor} style={{ color: currentColor }}>{currentColor}</option>)
    }
            </select>
        )
    }
}
export default ColorChange;