import {
    RECEIVE_FX_RATE
} from '../actions/fx_actions';

const fxReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_FX_RATE:
            const baseCurrency = action.payload["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
            const targetCurrency = action.payload["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
            const newRate = { [baseCurrency + targetCurrency]: action.payload["Realtime Currency Exchange Rate"]["5. Exchange Rate"] };
            return Object.assign({}, state, newRate);
        default:
            return state;
    }
};

export default fxReducer;
