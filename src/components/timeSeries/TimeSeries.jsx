import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryLabel } from "victory";

class TimeSeries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        if (Object.keys(this.props.currentTimeSeries).length !== 0) {
            const series = Object.entries(this.props.currentTimeSeries).map((unit) => ({ "x" : unit[0], "y" : parseFloat(unit[1]["4. close"])})).slice(0,30).reverse();
            return (
                <div className="chart-container">
                    <VictoryChart className="chart" theme={VictoryTheme.material} style={{ parent: { width: "100%", maxWidth: "480px" } }}>
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