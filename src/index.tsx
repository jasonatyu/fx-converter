import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root/Root';
import configureStore from './store/store';
// import * as FXAPIUtil from './util/fx_api_util'
import * as FXActions from './actions/fx_actions';
import * as serviceWorker from './serviceWorker';

declare global {
    interface Window { 
        getState: any,
        dispatch: any,
        fetchFXRate: any,
        fetchHistoricalRates: any,
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    window.fetchFXRate = FXActions.fetchFXRate;
    window.fetchHistoricalRates = FXActions.fetchHistoricalRates;
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
