import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

//passes onsubmit prop to child so child can call it. This allows reusability when we go on to EditExpensePage
const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense)=> {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');               //this is how we can redirect
        }}/>
    </div>
);

export default connect()(AddExpensePage);