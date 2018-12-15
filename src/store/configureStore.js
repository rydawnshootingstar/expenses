import {createStore,combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

//dev tools - if they exist 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer,
        auth: authReducer
        }),  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );

return store;
};

