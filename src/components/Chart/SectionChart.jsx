import React, { PureComponent } from 'react'
import { ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, Cell } from 'recharts'

export default class Chart extends PureComponent {
    render() {
        const pitchColors = ['#ff3333', '#ff9933', '#ffff33', '#99ff33', '#33ff33', '#33ff99', '#33ffff', '#3399ff', '#3333ff', '#9933ff', '#ff33ff', '#ff3399']
        
        const { sections, width} = this.props
        return (
            <ResponsiveContainer width={width} height={100} debounce={5}>
                <ComposedChart 
                    barGap={1}
                    data={sections}
                    margin={{
                        top: 15, right: 20, left: 32, bottom: 0,
                    }}
                >    
                    <XAxis hide='true' dataKey='start' unit='s' />
                    <YAxis hide='true' height={80}/>
                    <Tooltip 
                        content={renderTooltip}
                    />
                    <Bar dataKey='start' minPointSize={50} barGap={0} barCategoryGap={0}>
                        { sections ? sections.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={pitchColors[entry.key]}/>
                        )) : null}
                    </Bar>
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

const renderTooltip = ({ active, payload, label }) => {
    const pitchClasses = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    if (active === true) {
        return  (
            <div style={{backgroundColor: '#010101'}}>
                <div className='label'>{`${pitchClasses[payload[0].payload.key]}`}</div>
            </div>
        )
    }
}
