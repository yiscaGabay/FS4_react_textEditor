import React from "react"
import { Component } from 'react';
import Button from './Button';
import SizeChange from './SizeChange';
import ColorChange from './ColorChange';
import Text from './Text'
import FontChange from './FontChange';
import * as help from './helperFile'
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      input: [{text: '', textStyle: help.basicStyle}],
      capsLk: false,
      lang: 'english',
      emoji: false,
      history: []
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress = (event) => 
  {
    this.updateHistory();
    let value = event.target.value;
    if (value == 'SPACE') {
      value = '\xa0';
    }
    let newInput = this.state.input;
    newInput[newInput.length - 1].text += value;
    this.setState({ input: newInput });
  }


  handleCapsLk = (event) => {
    this.updateHistory();
    this.setState({ capsLk: !this.state.capsLk});
  }

  switchLanguage = (event) => {
    this.updateHistory();
    let val = event.target.value;
    let language = this.state.lang == 'english' ? 'hebrew' : 'english';
    if (val != "Emoji") {
      this.setState({ lang: language});
    } else {
      this.setState({emoji: !this.state.emoji})
    }
  }

  handleDelete = (event) => {
    this.updateHistory();
    let newInput = this.state.input;
    let index = newInput.length;
    let text = '';
    while (index != 0 && text == '') {
      text = newInput[index-1].text;
      index--;
    }
    if (text != '') {
      text = text.slice(0, -1);
      newInput[index].text = text;
    }
    this.setState({ input: newInput });
    console.log(this.state);
  }

  handleClearAll = (event) => {
    this.updateHistory();
    this.setState({ input: [{text: '', textStyle: help.basicStyle}] });
  }

  handleLowerUpperAll = (event) => {
    this.updateHistory();
    let newInput = this.state.input;
    if (event.target.value == 'LOWER ALL') {
      newInput.forEach(help.lowerAll);
      // console.log(newInput);
    }
    else {
      newInput.forEach(help.upperAll);
      // console.log(newInput);
    }
    this.setState({ input: newInput });
  }

  handleLowerUpperCase = (event) => {
    this.updateHistory();
    let newInput = this.state.input;
    if (event.target.value == 'UPPER-CASE') {
      newInput.forEach(inp => inp.text = inp.text.toUpperCase())
    } else {
      newInput.forEach(inp => inp.text = inp.text.toLowerCase())
    }
    this.setState({ input: newInput });
  }

  setSizeForAll = (size) => {
    this.updateHistory();
    let newInput = this.state.input;
    newInput.forEach(element => help.setSizeElement(element, size));
    this.setState({ input: newInput });
  }

  setColorForAll = (newColor) => {
    this.updateHistory();
    let newInput = this.state.input;
    newInput.forEach(element => help.setColorElement(element, newColor));
    this.setState({ input: newInput });
  }
  
  setFontForAll=(newFont) => {
    this.updateHistory();
    let newInput = this.state.input;
    newInput.forEach(element => help.setFontElement(element, newFont));
    this.setState({ input: newInput });
  }

  setColor = (newColor) => {
    this.updateHistory();
    let newInput = this.state.input;
    let lastStyle = newInput[newInput.length-1].textStyle;
    let newStyle = help.buildStyle(lastStyle.fontSize, newColor, lastStyle.fontFamily);
    let newBlock = { text: '', textStyle: newStyle };
    newInput.push(newBlock);
    this.setState({ input: newInput });
  }

  setSize = (newSize) => {
    this.updateHistory();
    let newInput = this.state.input;
    let lastStyle = newInput[newInput.length - 1].textStyle;
    console.log(lastStyle);
    let newStyle = help.buildStyle(newSize+'px', lastStyle.color, lastStyle.fontFamily);
    let newBlock = { text: '', textStyle: newStyle };
    newInput.push(newBlock);
    this.setState({ input: newInput });
  }

  setFont = (newFont) => {
    this.updateHistory();
    let newInput = this.state.input;
    let lastStyle = newInput[newInput.length-1].textStyle;
    let newStyle = help.buildStyle(lastStyle.fontSize, lastStyle.color, newFont);
    let newBlock = { text: '', textStyle: newStyle };
    newInput.push(newBlock);
    this.setState({ input: newInput });
  }

  updateHistory = () => {
    let newHistory = structuredClone(this.state.history);
    let newState = structuredClone(this.state);
    newHistory.push(newState);
    if (newHistory.length > 15) {
      newHistory.splice(0, 1);
    }
    this.setState({ history: newHistory });
  }

  handleUndo = () => {
    if (this.state.history.length > 0) {
      let newState = structuredClone(this.state.history[this.state.history.length - 1]);
      this.setState(newState);
    }
  }
  

  

  render() {
    return (
      <div className="mainPage">
        <h1>TEXT EDITOR</h1>
        <form className="textDisplayArea">
          {this.state.input.map((elem, index) => <Text key={index} innerText={elem.text} innerStyle={elem.textStyle} className='char'/>)}
        </form>
        <div>
          {help.numbers.map(l => <Button key={l} onClick={this.handleKeyPress} value={l} className='char'/>)}
        </div>
        <div className="emoji">
          {this.state.emoji && help.emoji.map(l => <Button key={l} onClick={this.handleKeyPress} value={l} className='char'/>)}
        </div>
        <div>
          {this.state.capsLk ?
            help.englishCapital.map(l => l != 'br' ? <Button key={l} onClick={this.handleKeyPress} value={l} className='char'/> : <br></br>)
            : (this.state.lang == 'english' ?
            help.englishLower.map(l =>  l != 'br' ? <Button key={l} onClick={this.handleKeyPress} value={l} className='char'/> : <br></br>)
              : help.hebrew.map(l => l != 'br' ? <Button key={l} onClick={this.handleKeyPress} value={l} className='char'/> : <br></br>))}
        </div>
        
        <div>
          {help.specialChars.map(char => <Button key={char} onClick={this.handleKeyPress} value={char} className='char'/>)}
        </div>
        <div>
          <Button onClick={this.handleCapsLk} value='CapsLK' className='action' capsLkOn={this.state.capsLk} />
          <Button onClick={this.switchLanguage} value={this.state.lang} className='action'/>
          <Button onClick={this.switchLanguage} value="Emoji" className='action'/>
          <Button onClick={this.handleKeyPress} value='SPACE' className='action'/>
          <Button onClick={this.handleDelete} value={'DELETE'} className='action' />
          <Button onClick={this.handleUndo} value={'UNDO'} className='action'/>
        </div>
        <div>
          <Button onClick={this.handleClearAll} value={'CLEAR ALL'} className='action'/>
          <Button onClick={this.handleLowerUpperAll} value={'LOWER ALL'} className='action'/>
          <Button onClick={this.handleLowerUpperAll} value={'UPPER ALL'} className='action' />
          <Button onClick={this.handleLowerUpperCase} value={'UPPER-CASE'} className='action'/>
          <Button onClick={this.handleLowerUpperCase} value={'lower-case'} className='action'/>
        </div>
          
        <div>
        <label>Choose for the next text:</label>
          <SizeChange chooseFunc={this.setSize} />
          <ColorChange chooseFunc={this.setColor} />
          <FontChange chooseFunc={this.setFont} />
        {/* </div>
        <div> */}
        <label>Choose changes for all the text:</label>
          <SizeChange chooseFunc={this.setSizeForAll} />
          <ColorChange chooseFunc={this.setColorForAll} />
          <FontChange chooseFunc={this.setFontForAll} />
        </div>

      </div>);
  }
}

export default App;
