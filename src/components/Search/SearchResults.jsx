import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemAvatar, Avatar, Divider, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';

import {getAnalysis} from '../../actions'

export default function SearchResults(props) {
    const searchResults = useSelector(state => state.searchResults.searchResults)
    const dispatch = useDispatch()


    return (
        <Dialog
            open={props.openResults}
            onClose={props.handleClose}
            scroll='paper'
        >
            <DialogTitle>Search Results</DialogTitle>
            <DialogContent>
                <List>
                    { searchResults ? searchResults.map( (item) => (
                        <div>
                            <ListItem alignItems='flex-start' button onClick={() => dispatch(getAnalysis(item.id))}>
                                <ListItemAvatar>
                                    <Avatar alt={item.name} src={item.album.images[1].url} />
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={item.name}
                                    secondary={<Typography variant='body2'>{item.artists[0].name} </Typography>}
                                />
                            </ListItem>
                            <Divider variant='inset' component='li'/>
                        </div>)) 
                    : null }
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
    
}