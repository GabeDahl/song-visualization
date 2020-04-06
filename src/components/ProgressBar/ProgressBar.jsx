import React from 'react'
import { connect } from 'react-redux'
import {Motion, spring} from 'react-motion';

export const ProgressBar = () => {
    return (
        <svg height={400} width={10} style={{position: 'absolute'}}>
            <line x1={0} y1={0} x2={0} y2={400} style={{stroke: 'black', strokeWidth: '2px'}}/>
        </svg>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar)
