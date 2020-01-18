import React from 'react'

export default function ColorPicker(props) {
  return (
    <div className="component">
      {props.colors.map(color => 
        <button key={color}>{color}</button>
      )}
    </div>
  )
}
