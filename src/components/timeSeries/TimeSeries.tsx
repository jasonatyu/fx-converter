import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis } from "victory";


type TimeSeriesState = {
    data?: Array<any>
}

type TimeSeriesProps = {
    currentTimeSeries: any, 
    isLoading: boolean
}

export class TimeSeries extends Component<TimeSeriesProps, TimeSeriesState> {

    constructor(props: TimeSeriesProps) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        if (Object.keys(this.props.currentTimeSeries).length !== 0 && !this.props.isLoading) {
            const series = Object.entries(this.props.currentTimeSeries).map((unit: any) => ({ "x" : unit[0], "y" : parseFloat(unit[1]["4. close"])})).slice(0,30).reverse();
            return (
                <div className="chart-container">
                    <VictoryChart theme={VictoryTheme.material} style={{ parent: { width: "100%", maxWidth: "480px", height: "100%", maxHeight: "480px" } }}>
                        <VictoryAxis style={{ tickLabels: { fontSize: 10, padding: 1, angle: 45, verticalAnchor: 'middle', textAnchor: 'start' } }} fixLabelOverlap={true}/>
                        <VictoryAxis
                            dependentAxis
                            orientation="left"
                            standalone={false}
                            style={{ tickLabels: { fontSize: 10, padding: 1 } }} fixLabelOverlap={true}
                        />
                        <VictoryLine
                            data={ series }
                        />
                    </VictoryChart>
                </div>
            )
        } else {
            return null;
        }
    }  
}

export default TimeSeries;