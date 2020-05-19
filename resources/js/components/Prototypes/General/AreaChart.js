import React from 'react';
import CanvasJSReact from '../../../js/canvasjs-2.3.2/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const AreaChart = (props) => {
    const {
        title,
        axisY,
        xValueFormatString,
        array,
        minY,
        maxY,
        minX,
        maxX
    } = props

    const options = {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title: {
            text: title
        },
        axisY: {
            title: axisY,
            includeZero: false,
            minimum: minY,
            maximum: maxY,
        },
        axisX: {
            includeZero: false,
            minimum: minX,
            maximum: maxX,
        },
        data: [
            {
                type: "area",
                xValueFormatString: xValueFormatString,
                yValueFormatString: "# C°",
                dataPoints: array
            }
        ]
    }

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );

}


export default AreaChart;