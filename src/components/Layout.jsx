import React, { Component } from 'react'
import Chart from './Chart/Chart'
import ChartSize from './ChartSize/ChartSize'

import {getAnalysis} from '../actions'
import { connect } from 'react-redux'
import { Card, Grid, Typography, CardContent } from '@material-ui/core'

export class Layout extends Component {
    componentDidMount() {
        this.props.getAnalysis('2oFpOoCwJq8ozOc2OcCJ38')
    }

    state = {
        width: 6000,
        height: 400,
        responsive: false,
    }

    render() {
        return (
            <Grid container direction='column' justify='center' alignItems='center' spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Card style={{maxWidth: '100%', overflowX: 'auto', backgroundColor: '#0f0f0f'}}>
                        <Chart
                            segments={this.props.segments}
                            width={this.state.width}
                            height={this.state.height}
                        />
                    </Card>
                </Grid>
                <Grid item container xs={12} sm={12} spacing={3}>
                    <Grid item id='left' xs={6} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant='h4'>Chart Options</Typography>
                                <ChartSize />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item id='right' xs={6} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant='h4'>Track Search</Typography>
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
    bars: state.analysis.bars,
    beats: state.analysis.beats,
    sections: state.analysis.sections,
    segments: state.analysis.segments,
    tatums: state.analysis.tatums
})

const mapDispatchToProps = dispatch => {
    return {
        getAnalysis: id => dispatch(getAnalysis(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
