import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

export default function GameBoard(props) {
  return (
    <div className="component">
      {props.guesses.map((guess, index)=>
        <GuessRow key={index} guess={guess} colors={props.colors} rowIndex={index} currentGuess={index === (props.guesses.length-1)} />
      )}
    </div>
  )
}
