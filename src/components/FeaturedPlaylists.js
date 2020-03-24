import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core'

export class FeaturedPlaylists extends Component {
    getSongs(playlist_ID) {
        this.setState({loading: true})
        this.props.getPlaylist(playlist_ID)
        setTimeout(() => {
            this.setState({loading: false})
        }, 4000);
    }

    render() {
        const data = [
            {
                name: "Brain Food", id:'spotify:playlist:37i9dQZF1DWXLeA8Omikj7', image: "https://i.scdn.co/image/ab67706f000000021df043181e0a5b20707ce3a9", description: "hypnotic electronic for studies and a relax."
            },
            {
                name:"Lo-Fi Beats", id: 'spotify:playlist:37i9dQZF1DWWQRwui0ExPn',image: "https://pl.scdn.co/images/pl/default/8216376ca4cc25c9d9843ecb8e2721fc1d6dba14", description: "Beats to relax and focus."
            },
            {
                name:"Heart Beats", id: 'spotify:playlist:37i9dQZF1DWSRc3WJklgBs',image: "https://i.scdn.co/image/ab67706f00000002314724fc7ca36a4fce2f1b6a", description: "Dance music for the heart <3"
            }
        ]

        return (
            <Grid container direction='column' spacing={1}>
                <Grid item xs={12}>
                    <Typography align='center' style={{color: '#1b1b1b'}} variant='h4'>Sample Playlists</Typography>
                </Grid>
                <Grid item container spacing={1}>
                    {data.map( d => (
                        <Grid item xs={12} sm={4}>
                            <Card key={d} style={{backgroundColor: '#1b1b1b'}}>
                                <CardActionArea onClick={() => this.props.getSongs(d.id)}>
                                    <CardMedia image={d.image} style={{height: 100, backgroundSize: 'contain'}}/>
                                    <CardContent>
                                        <Typography variant='h5' color='secondary'>{d.name}</Typography>
                                        <Typography variant='caption' color='secondary'>{d.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
            </Grid>
        )
    }
}



export default connect(null, null)(FeaturedPlaylists)
