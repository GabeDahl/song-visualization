import React, { PureComponent } from 'react'
import { ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts'

export default class Chart extends PureComponent {
    render() {
        const pitchClasses = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        const pitchColors = ['#ff3333', '#ff9933', '#ffff33', '#99ff33', '#33ff33', '#33ff99', '#33ffff', '#3399ff', '#3333ff', '#9933ff', '#ff33ff', '#ff3399']
        
        const { segments, width, height, pitches } = this.props
        return (
            <div style={{maxWidth: '95%', overflowX: 'auto', overflowY: 'hidden'}}>
            <ResponsiveContainer width={width} height={height} debounce={5}>
                <ComposedChart 
                    barGap={1}
                    data={segments}
                    margin={{
                        top: 15, right: 20, left: 0, bottom: 0,
                    }}
                >    
                    <XAxis dataKey='start' unit='s' />
                    <YAxis 
                        tickFormatter={(value) =>  `${value.toFixed(0)}%`} 
                        domain={[0, 100]} 
                        allowDataOverflow='true'
                    />
                    <Tooltip 
                        formatter={(value, name) =>  value > 6 ? [`${value.toFixed(0)}%`, name] : [null, null]} 
                        contentStyle={{backgroundColor: '#0f0f0f', border: 'none',}}
                        labelStyle={{color: '#f1f1f1'}}
                        itemSorter={(item) => (-item.value)}
                        
                    />
                    <Legend
                        align='left'
                        height={250}
                        layout='vertical' 
                        content={renderLegend}
                    />
                    {pitchClasses.map((p, i) => {
                        if (pitches[p] === true) {
                            return <Area fillOpacity="1" strokeOpacity='1' name={p} stackId='1' stroke={pitchColors[i]} fill={pitchColors[i]} dataKey={(s) => s.pitches[i]}/>
                        }
                    })}
                    
                    {/* Dynamically Painted Bar Chart */}
                    {/* <Bar dataKey={segments}>
                        {data.map((entry, index) => (
                            <Cell fill/>
                        ))}
                    </Bar> */}
                </ComposedChart>
            </ResponsiveContainer>
            </div>
        )
    }
}

const renderLegend = (props) => {
    const payload = props
    payload.payload.reverse()
    return (
        <ul style={{height: 210, display: 'table', paddingLeft: 10, marginTop: 5}}>
            {
                payload.payload.map((entry, index) => (
                    <li key={`item-${index}`} style={{color: entry.color, display: 'table-row'}}>{entry.value}</li>
                ))
            }
        </ul>
    )
}