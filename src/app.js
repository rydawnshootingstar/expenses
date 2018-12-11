import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'water bill', amount: 10000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'gas bill', amount: 3000, createdAt: 500000}));
const expenseThree = store.dispatch(addExpense({description:'rent', amount: 50000, createdAt: 7700}));

var appRoot = document.getElementById('words');

//provider passes our store to our jsx
const jsx = (
    <Provider store={store}>
    <AppRouter/>
    </Provider>
);

//then we render it
const renderApp = ()=> {
    ReactDOM.render(jsx, appRoot);
};

//render method
renderApp();

