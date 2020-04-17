import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../Search/SearchBar'
import { Grid, Typography, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw'
    },
    appBar: {
        width: '100%',
        backgroundColor: '#0f0f0f'
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='sticky' className={classes.appBar} >
                <Toolbar>
                    <Grid container>
                        <Grid item container justify='center' alignItems='center' xs={6}>
                            <Grid item>
                                <Typography variant='h4' color='secondary'>Pitch Visualizer</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container alignItems='center' xs={6}>
                            <SearchBar /> 
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}