import {
    RECEIVE_FX_RATE,
    RECEIVE_AMOUNT,
    CLEAR_SELECTION,
    RECEIVE_SELECTION,
    IS_LOADING
} from '../actions/fx_actions';

const filterReducer = (state={isLoading: false}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FX_RATE:
            const baseCurrency = action.payload["Realtime Currency Exchange Rate"]["1. From_Currency Code"];
            const baseCurrencyName = action.payload["Realtime Currency Exchange Rate"]["2. From_Currency Name"];
            const targetCurrency = action.payload["Realtime Currency Exchange Rate"]["3. To_Currency Code"];
            const targetCurrencyName = action.payload["Realtime Currency Exchange Rate"]["4. To_Currency Name"];
            //const currentFilter = {baseCurrencyName, targetCurrencyName, id: baseCurrency + targetCurrency};
            return Object.assign({}, state, { "currentSelection": baseCurrency + targetCurrency });
        case RECEIVE_AMOUNT:
            return Object.assign({}, state, { "currentAmount": action.amount })
        case RECEIVE_SELECTION:
            return Object.assign({}, state, { "currentSelection": action.id });
        case IS_LOADING:
            return Object.assign({}, state, { "isLoading": action.boolean });
        case CLEAR_SELECTION:
            return {};
        default:
            return state;
    }
}

export default filterReducer;