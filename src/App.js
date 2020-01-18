import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';


const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedColorIndex: 0,
      guesses: [this.getNewGuess(), this.getNewGuess()],
      code: this.generateCode()
    };
  };

  getNewGuess(){
    return {
      // code: [null, null, null, null],
      code: [1,3,2,0],
      score: {
        perfect: 0,
        almost: 0
      }
    };
  };


  generateCode(){
    return new Array(4).fill().map(()=> Math.floor(Math.random() * colors.length));
  }


  render(){
    return (
      <div className="App">
        <button onClick={()=> this.setState(state => {
          return {
          selectedColorIndex: ++state.selectedColorIndex % 4
          }
          })}>
          Next Color
        </button>
        Selected Color : {colors[this.state.selectedColorIndex]}
        <header className="App-header">
          React Mastermind
        </header>
        <GameBoard colors={colors} guesses={this.state.guesses} />
        <ColorPicker colors={colors} selectedColorIndex={this.state.selectedColorIndex} />
        <GameTimer />
        <NewGameButton />
        <footer className="component">Footer</footer>
      </div>
    );
  }
}

export default App;
