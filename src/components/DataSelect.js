import React, { Component } from 'react'
import { FormControl, RadioGroup, FormControlLabel, Radio, withStyles, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme => ({
    panel: {
        backgroundColor: "#1b1b1b",
    },
    root: {
        color: '#f1f1f1',
        fill: '#f1f1f1'
    }
})

export class DataSelect extends Component {

    handleDataChange = event => {
        this.props.handleDataSelect(event.target.value)
    }

    render() {
        const dimensions = ['acousticness', 'danceability', 'instrumentalness', 'energy', 'liveness', 'speechiness', 'valence', 'loudness', 'duration_ms']

        const {classes} = this.props
        return (
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color='secondary' />}>
                    <Typography variant='caption' color='secondary'>Data Dimensions</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControl component='fieldset' fullWidth='true' style={{justifyContent:'center', alignItems:'center'}}>
                        <RadioGroup value={this.props.selectedData} onChange={this.handleDataChange}>
                            {dimensions.map(d => <FormControlLabel style={{color: '#f1f1f1'}} key={d} value={d} label={d} control={<Radio size='small' classes={{root: classes.root}} color='secondary'/>}>{d}</FormControlLabel>)}
                        </RadioGroup>
                    </FormControl>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}



export default withStyles(styles)(DataSelect)
