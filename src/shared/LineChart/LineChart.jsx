import React from 'react'
import { Wrapper, ProgressBar } from './LineChart.styles'

function LineChart({ title, percentage, color }){

    return <Wrapper>
        <span>{title}</span>
        <ProgressBar 
            percentage={percentage} 
            color={color}
        />
    </Wrapper>

}

export default LineChart;