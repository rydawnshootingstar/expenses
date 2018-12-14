import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { setTextFilter } from './actions/filters';
import { startSetExpenses } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';

const store = configureStore();

// store.subscribe(()=> {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

var appRoot = document.getElementById('words');

//provider passes our store to our jsx
const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

//render this until our assets are all fetched from DB
ReactDOM.render(<img src ="/images/baby.gif" alt="loading..."></img>, appRoot);

store.dispatch(startSetExpenses()).then(()=> {
    ReactDOM.render(jsx, appRoot);
});

