import { combineReducers } from "redux";
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
    errors: errorsReducer,
    entities: entitiesReducer,
    ui: uiReducer
});

export default rootReducer; 
