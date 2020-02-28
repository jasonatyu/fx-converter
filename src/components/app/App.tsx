import * as React from "react";
import FormContainer from '../form/FormContainer';
import ResultContainer from '../result/ResultContainer';
import TimeSeriesContainer from '../timeSeries/TimeSeriesContainer';

const App: React.FC<{}> = () => (
  <div className="background">
    <div className="App">
      <div className = "fx-input">
        <FormContainer />
        <div className="result-container">
          <ResultContainer />
          <TimeSeriesContainer />
        </div>
        <p id="disclosure">Data provided by <a href="https://github.com/jasonatyu/fx-converter">alphavantage</a>​. Link to <a href="https://www.alphavantage.co/">github</a></p>
      </div>
    </div>
  </div>
)

export default App;

