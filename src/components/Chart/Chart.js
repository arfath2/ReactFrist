import React from "react";
import ChartBar from "./ChartBar"
import './Chart.css'

const chart = (props) =>{
    const dataPointvalues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointvalues)

    return <div className="chart">
        {props.dataPoints.map((dataPoint) =>
        <ChartBar 
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
        />
        )}
    </div>
}

export default chart