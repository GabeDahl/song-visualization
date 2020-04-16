import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup, FormControlLabel } from '@material-ui/core';

export default function PitchSelect(props) {
  const pitchClasses = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'] 
  return (
      <FormGroup row='true'>
            {pitchClasses.map( (p) => {
                return <FormControlLabel
                            control={<Checkbox checked={props.pitches[p]} onClick={props.handleCheck} name={p}/>}
                            label={p}
                        /> 
            })}
      </FormGroup>
  )
}
