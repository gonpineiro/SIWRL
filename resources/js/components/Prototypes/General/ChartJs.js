import React from 'react';
import CanvasJSReact from '../../../js/canvasjs-2.3.2/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ChartJs = (props) => {
    const {
        title,
        axisY,
        xValueFormatString,
        array,
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
            minimum: 10,
            maximum: 50,
        },
        axisX: {
            includeZero: false,
            minimum: 0,
            maximum: 23,
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
            <CanvasJSChart options={options}
            /* onRef={ref => this.chart = ref} */
            />
        </div>
    );

}


export default ChartJs;