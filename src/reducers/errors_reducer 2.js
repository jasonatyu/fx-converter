import { combineReducers } from "redux";

import fxErrorsReducer from "./fx_errors_reducer";

const errorsReducer = combineReducers({
    fx: fxErrorsReducer
});

export default errorsReducer;