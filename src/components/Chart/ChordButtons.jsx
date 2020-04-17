import React from 'react';
import { makeStyles, GridList, GridListTile, Typography, Button, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tile: {
        height: 'auto'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
    }
}))

const chords = [
    ['chord1', 'https://google.com'],
    ['chord1', 'https://google.com'],
    ['chord1', 'https://google.com'],
    ['chord1', 'https://google.com'],
    ['chord1', 'https://google.com'],
    ['chord1', 'https://google.com']
]
export default function PitchSelect(props) {
  const classes = useStyles()
  return (
    <List className={classes.list}>
        {chords.map((chord) => {
            return (
                <ListItem>
                    <Typography>{chord[0]}</Typography>
                    <Button variant='contained' color='primary'>Demo</Button>
                </ListItem>
            )
        })}
    </List>
  )
}
