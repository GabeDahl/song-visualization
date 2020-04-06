import React, { Component } from 'react'
import Chart from './Chart/Chart'
import {getAnalysis} from '../actions'
import { connect } from 'react-redux'
import { ProgressBar } from './ProgressBar/ProgressBar'

export class Layout extends Component {
    componentDidMount() {
        this.props.getAnalysis('2oFpOoCwJq8ozOc2OcCJ38')
    }

    state = {
        width: 2000,
        height: 600,
        responsive: false,
    }

    render() {
        return (
            <div>
                <Chart
                    segments={this.props.segments}
                    width={this.state.width}
                    height={this.state.height}
                />
                <ProgressBar />
            </div>
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
