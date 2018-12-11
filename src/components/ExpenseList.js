import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <p>
        {
            props.expenses.map((expense)=> {
                return <ExpenseListItem key={expense.id}{...expense} />
            })
        }
        </p>
    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//information about what we want to connect(state) as defined above, then the component
export default connect(mapStateToProps)(ExpenseList);