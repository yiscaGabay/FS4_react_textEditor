import React from "react"
import { Component } from 'react';
import './App.css';

const sizes = [12, 14, 16, 18, 20, 22, 30, 36];

class SizeChange extends Component {
    constructor(props) {
        super(props);
    }

    handleSizeClick = (event) => {
        console.log("in handleSizeClick");
        let size = event.target.value;
        this.props.chooseFunc(size);
    }


    render() {
        return(
            <select className="my-select-menu" onChange={(e) => this.handleSizeClick(e)}>
                {sizes.map(size => <option key={size} value={size}>{size}</option>)}
            </select>
        )
    }
}
    
export default SizeChange;
