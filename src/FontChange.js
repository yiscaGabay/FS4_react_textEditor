import React from "react"
import { Component } from 'react';
import './App.css';


const fonts = ['Arial', 'cursive', 'fantasy', 'monospace', 'sans-serif', 'serif'];

class FontChange extends Component {
    constructor(props) {
        super(props);
    }

    handleFontClick = (event) => {
        let font = (event.target.value);
        this.props.chooseFunc(font);
    }


    render() {
        return(
            <select className="my-select-menu" onChange={(e) => this.handleFontClick(e)}>
                {fonts.map(font =>
                    <option key={font} value={font} style={{ fontFamily: font }}>{font}</option>)
    }
            </select>
        )
    }
}

export default FontChange;

