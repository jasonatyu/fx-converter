import * as React from "react";
import FormContainer from '../form/FormContainer';
import ResultContainer from '../result/ResultContainer';
import TimeSeriesContainer from '../timeSeries/TimeSeriesContainer';

function App() {
  return (
    <div className="App">
      <div className = "fx-input">
        <FormContainer />
        <div className="result-container">
          <ResultContainer />
          <TimeSeriesContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
