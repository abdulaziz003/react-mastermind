import React from 'react'
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

export default function GuessRow(props) {
  return (
    <div className="component">
      GuessRow
      <GuessPegs />
      <GuessScore />
    </div>
  )
}
