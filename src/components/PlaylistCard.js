import React, { Component } from 'react'
import { Card, CardMedia, Typography, CardContent, Grid } from '@material-ui/core'



export class PlaylistCard extends Component {
    constructor() {
        super()
        this.state = {
            dataLoaded: false
        }
    }

    render() {
        if (this.props.playlist === undefined) {
            return (
                <Typography variant='h1'>Fetching API Data...</Typography>
            )
        } else {
            return (
                <div style={{width: '100%'}}>
                {/* <Typography align='center' variant='h4' color='primary'>Current Playlist</Typography> */}
                <Card style={{backgroundColor: '#2BDE6A', width: '100%'}}>
                    <Grid container alignItems='center' justify='space-evenly'>
                        <Grid item sm={5} xs={12}>
                            <CardMedia image={this.props.playlist.images[0].url} style={{height: 200, margin: 10, backgroundSize: 'contain'}}/>
                        </Grid>
                        <Grid item sm={7} xs={12}>
                            <CardContent>
                                <Typography color='textPrimary' variant='h3'>{this.props.playlist.name}</Typography>
                                <Typography color='textPrimary' variant='subtitle1'>{this.props.playlist.description}</Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card> 
                </div>
            )
        }
    }
}


export default PlaylistCard
