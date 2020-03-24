import React, { Component } from 'react'
import { FormControl, FormControlLabel, withStyles, FormGroup, Checkbox, FormLabel, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails } from '@material-ui/core'
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

    handleGraphChange = action => event => {
        this.props.handleGraphChange(action, event)
    }

    render() {
        const {classes} = this.props
        return (
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon color='secondary' />}>
                    <Typography variant='caption' color='secondary'>Graph Elements</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormControl component='fieldset' fullWidth='true' style={{justifyContent:'center', alignItems:'center'}}>
                        <FormGroup>
                            <FormControlLabel 
                                control={<Checkbox classes={{root: classes.root}} size='small' color='secondary' checked={this.props.showArea} onChange={this.handleGraphChange('showArea')}/>}
                                label={'Area'}
                                style={{color: '#f1f1f1'}}
                            /><FormControlLabel 
                                control={<Checkbox classes={{root: classes.root}} size='small' color='secondary' checked={this.props.showBars} onChange={this.handleGraphChange('showBars')}/>}
                                label={'Bars'}
                                style={{color: '#f1f1f1'}}
                            />
                            <FormControlLabel 
                                control={<Checkbox classes={{root: classes.root}} size='small' color='secondary' checked={this.props.showMonotone} onChange={this.handleGraphChange('showMonotone')}/>}
                                label={'Monotone Line'}
                                style={{color: '#f1f1f1'}}
                            />
                            <FormControlLabel 
                                control={<Checkbox classes={{root: classes.root}} size='small' color='secondary' checked={this.props.showBasis} onChange={this.handleGraphChange('showBasis')}/>}
                                label={'B-Spline Line'}
                                style={{color: '#f1f1f1'}}
                            />
                        </FormGroup>
                    </FormControl>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}


export default withStyles(styles)(DataSelect)

