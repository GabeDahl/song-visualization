
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  input: {
    width: 120,
  },
});

export default function ChartSize() {
    const classes = useStyles();
    const [value, setValue] = React.useState(2000);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    }

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 10000) {
            setValue(10000);
        }
    }

    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Width (pixels)
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        step={100}
                        max={10000}
                        min={300}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        className={classes.input}
                        value={value}
                        variant='outlined'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 100,
                            min: 0,
                            max: 10000,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}