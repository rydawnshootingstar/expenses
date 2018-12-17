import React from 'react'
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            {/* mobile only  */}
            <div className="show-for-mobile">Expenses</div>    
            {/* desktop only  */}
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
        {   props.expenses.length === 0 ? (
                <div className="list-item list-item__message">
                    <span>No expenses</span>
                </div>
            )
            :
                (
                props.expenses.map((expense)=> {
                return <ExpenseListItem key={expense.id}{...expense} />
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

//information about what we want to connect(state) as defined above, then the component
export default connect(mapStateToProps)(ExpenseList);