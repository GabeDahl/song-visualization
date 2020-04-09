import React, { PureComponent } from 'react'
import { ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Area } from 'recharts'

export default class Chart extends PureComponent {
    render() {
        const pitchClasses = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
        const pitchColors = ['#ff3333', '#ff9933', '#ffff33', '#99ff33', '#33ff33', '#33ff99', '#33ffff', '#3399ff', '#3333ff', '#9933ff', '#ff33ff', '#ff3399']

        
        const { segments, width, height } = this.props
        return (
            <ResponsiveContainer width={width} height={height} debounce={5}>
                <ComposedChart 
                    barGap={1}
                    data={segments}
                    margin={{
                        top: 15, right: 20, left: 30, bottom: 20,
                    }}
                >    
                    <XAxis dataKey='start' unit='s' />
                    <YAxis 
                        tickFormatter={(value) =>  `${value.toFixed(0)}%`} 
                        domain={[0, 100]} 
                        allowDataOverflow='true'
                    />
                    <Tooltip 
                        formatter={(value) =>  `${value.toFixed(0)}%`} 
                        contentStyle={{backgroundColor: '#0f0f0f', border: 'none', zIndex: 400}} 
                        labelStyle={{color: '#f1f1f1'}}
                        itemSorter={(item) => (-item.value)}
                    />
                    <Legend 
                        align='left' 
                        layout='vertical' 
                        style={{display: 'flex', flexDirection: 'column-reverse'}}
                        formatter={renderColorfulLegendText}
                    />
                    {pitchClasses.map((p, i) => {
                        return <Area fillOpacity="1" strokeOpacity='1' name={p} stackId='1' stroke={pitchColors[i]} fill={pitchColors[i]} dataKey={(s) => s.pitches[i]}/>
                    })}
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

const  renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
  return <span style={{ color }}>{value}</span>;
}

