import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
}));

export default function PitchSelect(props) {
  const classes = useStyles();

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
