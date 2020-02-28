import {

} from '../actions/fx_actions';

const fxErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        default:
            return state;
    }
};

export default fxErrorsReducer;
