import {
    RECEIVE_FX_RATE
} from '../actions/fx_actions';

const fxInfoReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_FX_RATE:
            const baseCurrency = action.payload["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
            const baseCurrencyName = action.payload["Realtime Currency Exchange Rate"]["2. From_Currency Name"];
            const targetCurrency = action.payload["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
            const targetCurrencyName = action.payload["Realtime Currency Exchange Rate"]["4. To_Currency Name"];
            return Object.assign({}, state, { [baseCurrency + targetCurrency] : [baseCurrency, baseCurrencyName, targetCurrency, targetCurrencyName] });
        default:
            return state;
    }
};

export default fxInfoReducer;
