import {
    RECEIVE_HISTORICAL_RATES
} from '../actions/fx_actions';

const timeSeriesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_HISTORICAL_RATES:
            const baseSymbol = action.payload["Meta Data"]["2. From Symbol"];
            const targetSymbol = action.payload["Meta Data"]["3. To Symbol"];
            const timeSeries = { [baseSymbol + targetSymbol]: action.payload["Time Series FX (Daily)"] }
            return Object.assign({}, state, timeSeries);
        default:
            return state;
    }
};

export default timeSeriesReducer;