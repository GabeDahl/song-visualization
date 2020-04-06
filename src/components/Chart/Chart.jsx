import React, { PureComponent } from 'react'
import { ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Area } from 'recharts'

export default class Chart extends PureComponent {
    render() {
        const { segments, width, height } = this.props
        const getPitch0 = (x) => {return x.pitches[0]}
        const getPitch1 = (x) => {return x.pitches[1]}
        const getPitch2 = (x) => {return x.pitches[2]}
        const getPitch3 = (x) => {return x.pitches[3]}
        const getPitch4 = (x) => {return x.pitches[4]}
        const getPitch5 = (x) => {return x.pitches[5]}
        const getPitch6 = (x) => {return x.pitches[6]}
        const getPitch7 = (x) => {return x.pitches[7]}
        const getPitch8 = (x) => {return x.pitches[8]}
        const getPitch9 = (x) => {return x.pitches[9]}
        const getPitch10 = (x) => {return x.pitches[10]}
        const getPitch11 = (x) => {return x.pitches[11]}

        return (
            <ResponsiveContainer width={width} height={height} style={{position: 'absolute'}}>
                <ComposedChart 
                    barGap={1}
                    data={segments}
                    margin={{
                        top: 15, right: 20, left: 30, bottom: 20,
                    }}
                >
                    <CartesianGrid stroke='#f5f5f5' />
                    <XAxis dataKey='start'/>
                    <YAxis tickFormatter={toPercent} domain={[0, 100]} allowDataOverflow='true'/>
                    <Tooltip/>
                    <Legend />
                    <Area name='C' stackId='1' stroke='none' fill='#ff0000' dataKey={getPitch0}/>
                    <Area name='C#' stackId='1' stroke='none' fill='#ff7f00' dataKey={getPitch1}/>
                    <Area name='D' stackId='1' stroke='none' fill='#ffff00' dataKey={getPitch2}/>
                    <Area name='D#' stackId='1' stroke='none' fill='#7fff00' dataKey={getPitch3}/>
                    <Area name='E' stackId='1' stroke='none' fill='#00ff00' dataKey={getPitch4}/>
                    <Area name='F' stackId='1' stroke='none' fill='#00ff7f' dataKey={getPitch5}/>
                    <Area name='F#' stackId='1' stroke='none' fill='#00ffff' dataKey={getPitch6}/>
                    <Area name='G' stackId='1' stroke='none' fill='#0007ff' dataKey={getPitch7}/>
                    <Area name='G#' stackId='1' stroke='none' fill='#0000ff' dataKey={getPitch8}/>
                    <Area name='A' stackId='1' stroke='none' fill='#7f00ff' dataKey={getPitch9}/>
                    <Area name='A#' stackId='1' stroke='none' fill='#ff00ff' dataKey={getPitch10}/>
                    <Area name='B' stackId='1' stroke='none' fill='#ff007f' dataKey={getPitch11}/>               
                </ComposedChart>
            </ResponsiveContainer>
        )
    }
}

const toPercent = (decimal, fixed = 0) => {
	return `${decimal.toFixed(fixed)}%`;
};

