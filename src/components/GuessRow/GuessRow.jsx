import React from 'react'
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';

export default function GuessRow(props) {
  return (
    <div className="component">
      <div>{props.rowIndex + 1}</div>
      <GuessPegs colors={props.colors} code={props.guess.code} />
      {
        props.currentGuess ? 
        <ScoreButton /> :
        <GuessScore /> 
      }
    </div>
  )
}
