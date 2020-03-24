import React, { Component } from 'react'
import { Grid, Typography, TextField, FormControl, Button, withStyles, Card } from '@material-ui/core'
import { connect } from 'react-redux'
import {getPlaylist} from '../actions'

const styles = theme => ({
    card: {
        paddingTop: '1vh',
        paddingBottom: '1vh',
        backgroundColor: "#1b1b1b",
    },
    cssLabel: {
        color : '#2BDE6A'
    },
    
    cssOutlinedInput: {
        color: '#2BDE6A',
        '&$cssFocused $notchedOutline': {
            borderColor: "#2BDE6A !important",
        }
    },

    cssFocused: {},

    notchedOutline: {
        borderWidth: '1px',
        borderColor: '#2BDE6A !important'
    },
})

export class Search extends Component {
    constructor() {
        super()
        this.state = {
            playlist_ID: '4ux06RblXzGVOPIl9zRHvR'
        }
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange(e) {
        this.setState({playlist_ID: e.target.value})
        setTimeout(() => {
            console.log(this.state.playlist_ID)
        }, 2000);
    }

    render() {
        const {classes} = this.props
        return (
            <Grid container spacing={1}>
                <Grid item sm={6} xs={12}>
                    <Card className={classes.card}>
                        <FormControl style={{width: '100%'}}>
                            <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                                <Grid item  style={{marginTop: '1vh'}}>
                                    <TextField  
                                        InputLabelProps={{classes: {root: classes.cssLabel, focused: classes.cssFocused} }}
                                        InputProps={{classes: {root: classes.cssOutlinedInput,focused: classes.cssFocused,notchedOutline: classes.notchedOutline}}}
                                        color='secondary' variant='outlined' label='Playlist ID' value={this.state.playlist_ID} size='small' onChange={this.handleTextChange}
                                    />
                                </Grid>
                                <Grid item style={{marginTop: '1vh'}}>
                                    <Button size='small' variant='outlined' color='primary' onClick={() => this.props.getSongs(this.state.playlist_ID)}>Get Playlist</Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Card>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Card className={classes.card}>
                        <FormControl style={{width: '100%'}}>
                            <Grid container direction='row' justify='center' alignItems='center' spacing={1}>
                                <Grid item style={{marginTop: '1vh'}}>
                                    <TextField  
                                        InputLabelProps={{classes: {root: classes.cssLabel, focused: classes.cssFocused} }}
                                        InputProps={{classes: {root: classes.cssOutlinedInput,focused: classes.cssFocused,notchedOutline: classes.notchedOutline}}}
                                        color='secondary' variant='outlined' label='Album ID' value={this.state.playlist_ID} size='small' onChange={this.handleTextChange}
                                    />
                                </Grid>
                                <Grid item style={{marginTop: '1vh'}}>
                                    <Button size='small' variant='outlined' color='primary' onClick={() => this.props.getSongs(this.state.playlist_ID)}>Get Album</Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Card> 
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
      getPlaylist: playlist_ID => dispatch(getPlaylist(playlist_ID))
    }
  }

export default connect(null, mapDispatchToProps)(withStyles(styles)(Search))
