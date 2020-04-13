import React, { Component } from 'react'
import Chart from './Chart/Chart'
import ChartSize from './Chart/ChartSize'
import Header from './Header/Header'

import {getAnalysis} from '../actions'
import { connect } from 'react-redux'
import { Card, Grid, Typography, CardContent, Avatar, } from '@material-ui/core'

export class Layout extends Component {
    componentDidMount() {
        this.props.getAnalysis('3XfvTelX1xYLgwgpzfd8qi')
    }

    state = {
        width: 6000,
        height: 250,
        pitchClasses : ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
        activePitches: [],
        openFromSearch: false
    }

    handleSizeSliderChange = (event, newValue) => {
        this.setState({width : newValue})
    }

    // handleChange = (event) => {
    //     this.setState({ activePitches[event.target.name]: event.target.checked });
    //   };

    render() {
        return (
            <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Header />
                </Grid>
                <Grid container item xs={12} sm={12} justify='center'>
                    <Card style={{maxWidth: '95%', overflowX: 'auto', backgroundColor: '#0f0f0f'}}>
                        <CardContent>
                            <Grid container spacing={3} alignItems='flex-end' justify='space-evenly' style={{maxWidth: '95vw'}}>
                                <Grid item><Avatar style={{border: '1px solid white'}} alt='album-image' src={this.props.albumURL} variant='rounded' >A</Avatar></Grid>
                                <Grid item><Typography variant='h5' style={{color: '#f1f1f1'}}>{this.props.name}</Typography></Grid>
                                <Grid item><Typography variant='h7' style={{color: '#666'}}>{this.props.artist}</Typography></Grid>
                            </Grid>
                            <Chart
                                segments={this.props.segments}
                                width={this.state.width}
                                height={this.state.height}
                            />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item container xs={12} sm={12} spacing={3}>
                    <Grid item id='left' xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <ChartSize 
                                    handleSizeSliderChange={this.handleSizeSliderChange}
                                    value={this.state.width}
                                />
                                
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item id='right' xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    analysis: state.analysis,
    segments: state.analysis.segments,
    name: state.analysis.name,
    artist: state.analysis.artist,
    albumURL: state.analysis.albumURL
})

const mapDispatchToProps = dispatch => {
    return {
        getAnalysis: id => dispatch(getAnalysis(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
