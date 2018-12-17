import React from 'react'
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpensesSummary = ({count, total})=> {
const word = count === 1 ? 'expense' : 'expenses';
const finalTotal = numeral(total/ 100).format('$0,0.00');
    return(
        <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Currently viewing <span>{count}</span> {word} totalling <span>{finalTotal}</span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
        </div>
        </div>
    );
};

const mapStateToProps = (state)=> {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expensesTotal = selectExpensesTotal(visibleExpenses);

    return {
        count: visibleExpenses.length,
        total: expensesTotal
    };
};
export default connect(mapStateToProps)(ExpensesSummary);