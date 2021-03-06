import * as APIUtil from '../util/fx_api_util';

export const RECEIVE_FX_RATE = 'RECEIVE_FX_RATE';
export const RECEIVE_HISTORICAL_RATES = 'RECEIVE_HISTORICAL_RATES';
export const RECEIVE_AMOUNT = 'RECEIVE_AMOUNT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const CLEAR_SELECTION = 'CLEAR_SELECTION';
export const RECEIVE_SELECTION = 'RECEIVE_SELECTION';
export const IS_LOADING = 'IS_LOADING'

export const receiveFXRate = (payload) => ({
    type: RECEIVE_FX_RATE,
    payload
});

export const receiveHistoricalRates = (payload) => ({
    type: RECEIVE_HISTORICAL_RATES,
    payload
});

export const receiveAmount = (amount) => ({
    type: RECEIVE_AMOUNT,
    amount
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const clearSelection = () => ({
    type: CLEAR_SELECTION
});

export const receiveSelection = (id) => ({
    type: RECEIVE_SELECTION,
    id
});

export const isLoading = (boolean) => ({
    type: IS_LOADING,
    boolean 
})

export const fetchFXRate = (base, target) => dispatch => (
    APIUtil.fetchFXRate(base, target).then(payload => {
        if (payload.Note) {
           return dispatch(receiveErrors(["API limit exceeded. Please try again in a few minutes."]))
        } else {
            return dispatch(receiveFXRate(payload))
        }
    })
)

export const fetchHistoricalRates = (base, target) => dispatch => (
    APIUtil.fetchHistoricalRates(base, target).then(payload => {
        if (payload.Note) {
            return dispatch(receiveErrors(["API limit exceeded. Please try again in a few minutes."]))
        } else {
            return dispatch(receiveHistoricalRates(payload))
        }
    })
)
