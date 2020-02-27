import { combineReducers } from "redux";

import fxReducer from "./fx_reducer";
import timeSeriesReducer from "./timeseries_reducer";
import fxInfoReducer from './fx_info_reducer';

const entitiesReducer = combineReducers({
    fxInfo: fxInfoReducer,
    fx: fxReducer,
    timeSeries: timeSeriesReducer
});

export default entitiesReducer;