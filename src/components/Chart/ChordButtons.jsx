import React from 'react';
import { makeStyles, Typography, Button, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    tile: {
        height: 'auto'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
    }
}))


export default function PitchSelect(props) {
  const classes = useStyles()
//   const { chords } = props
  return (
    <List className={classes.list}>
        {/* {chords.map((chord) => {
            return (
                <ListItem>
                    <Typography>hi</Typography>
                    <Button variant='contained' color='primary'>Demo</Button>
                </ListItem>
            )
        })} */}
    </List>
  )
}
