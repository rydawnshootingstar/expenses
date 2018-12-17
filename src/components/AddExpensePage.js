import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/expenses';

//passes onsubmit prop to child so child can call it. This allows reusability when we go on to EditExpensePage
const AddExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Add Expense</h1>
            </div>
        </div>
        
        <div className="content-container">
        <ExpenseForm onSubmit={(expense)=> {
            props.dispatch(startAddExpense(expense));
            props.history.push('/');               //this is how we can redirect
        }}/>
        </div>
    </div>
);

export default connect()(AddExpensePage);