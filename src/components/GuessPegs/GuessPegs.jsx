import React from 'react'
import GuessPeg from '../GuessPeg/GuessPeg';

export default function GuessPegs(props) {
  return (
    <div className="component">
      <GuessPeg color={props.colors[props.code[0]]}/>
      <GuessPeg color={props.colors[props.code[1]]}/>
      <GuessPeg color={props.colors[props.code[2]]}/>
      <GuessPeg color={props.colors[props.code[3]]}/>
    </div>
  )
}
