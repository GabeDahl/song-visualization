import React, { Component } from 'react'
import Chart from './Chart/Chart'
import ChartSize from './Chart/ChartSize'
import PitchSelect from './Chart/PitchSelect'
import ChordButtons from './Chart/ChordButtons'
import Header from './Header/Header'
import SectionChart from './Chart/SectionChart'

import {getAnalysis} from '../actions'
import { connect } from 'react-redux'
import { Card, Grid, Typography, CardContent, Avatar, Backdrop, CircularProgress, } from '@material-ui/core'

export class Layout extends Component {
    componentDidMount() {
        this.props.getAnalysis('7MwwPyZJ7UKFROj2oVnH6R')
    }

    state = {
        width: 6000,
        height: 250,
        pitches: {
            'C': true,
            'C#': true,
            'D': true,
            'D#': true,
            'E': true,
            'F': true,
            'F#': true,
            'G': true,
            'G#': true,
            'A': true,
            'A#': true,
            'B': true
        },
        openFromSearch: false
    }

    handleSizeSliderChange = (event, newValue) => {
        this.setState({width : newValue})
    }

    handleCheck = (event) => {
        const e = event
        this.setState({ pitches: {
            ...this.state.pitches,
            [e.target.name]: e.target.checked 
        } })
    }

    render() {
        return (
            <div className='wrapper'>
            <Grid container direction='column' justify='center' alignItems='center' spacing={1}>
                <Grid item xs={12} sm={12}>
                    <Header />
                </Grid>
                <Grid container item xs={12} sm={12} justify='center'>
                    <Card style={{maxWidth: '95%', overflowX: 'auto', backgroundColor: '#0f0f0f'}}>
                        <CardContent>
                            <Grid container spacing={3} alignItems='center' justify='center' style={{maxWidth: '95vw'}}>
                                <Grid item><Avatar style={{border: '1px solid white'}} alt='album-image' src={this.props.albumURL} variant='rounded' >A</Avatar></Grid>
                                <Grid item><Typography variant='h5' style={{color: '#f1f1f1'}}>{this.props.name}</Typography></Grid>
                                <Grid item><Typography variant='h7' style={{color: '#666'}}>{this.props.artist}</Typography></Grid>
                            </Grid>
                            <div style={{maxWidth: '95%', overflowX: 'auto', overflowY: 'hidden'}}>
                                <SectionChart 
                                    sections={this.props.sections}
                                    segments={this.props.segments}
                                    width={this.state.width}
                                    height={this.state.height}
                                />
                                <Chart
                                    segments={this.props.segments}
                                    width={this.state.width}
                                    height={this.state.height}
                                    pitches={this.state.pitches}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item container xs={12} sm={12} spacing={1}>
                    <Grid item id='left' xs={12} sm={6}>
                        <Card style={{height: '100%', backgroundColor: '#0f0f0f'}}>
                            <CardContent>
                                <ChartSize 
                                    handleSizeSliderChange={this.handleSizeSliderChange}
                                    value={this.state.width}
                                />
                                
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item id='right' xs={12} sm={6}>
                        <Card style={{height: '100%', backgroundColor: '#0f0f0f'}}>
                            <CardContent>
                                <PitchSelect 
                                    pitches={this.state.pitches}
                                    handleCheck={this.handleCheck}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item id='right' xs={12} sm={12}>
                        <Card style={{ backgroundColor: '#0f0f0f'}}>
                            <CardContent>
                                <ChordButtons />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                {/* <Backdrop style={{zIndex: 1000}} open='true'>
                    <CircularProgress />
                </Backdrop> */}
            </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    analysis: state.analysis,
    segments: state.analysis.segments,
    sections: state.analysis.sections,
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
