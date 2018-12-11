import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//target state for application
const demoState = {
    expenses: [{
        id: 'ddd',
        description: 'describe expense',
        notes: 'notes about expense',
        amount: 54500,                   //in pennies ($545.00)
        createdAt: 0
    }],
    filters: {                           //allow user to filter expenses by these
        text: 'rent',
        sortBy: 'amount',                //date or amount
        startDate: undefined,            //used with createdAt   
        endDate: undefined               //used with createdAt
    }
};


store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//dispatches get sent to both reducers 
const expenseOne = store.dispatch(addExpense({description:'Rent', amount: 10000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount: 300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description:'Anime', amount: 100, createdAt: 420}));
const expenseFour = store.dispatch(addExpense({description:'Booze', amount: 5000, createdAt: 0}));


// store.dispatch(removeExpense({id: expenseOne.expense.id}));

//pass an ID, and an object of modifications you wanna make
// store.dispatch(editExpense(expenseTwo.expense.id, { amount:500 }));

// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1001));         //created after 10001
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(500));            //created before 500

// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());

/*
good praxis for wiring this shit - do the call to store.dispatch, define the TYPE in the reducer case, then set up
our variables in the action, then do the logic and the change in the reducer case
*/