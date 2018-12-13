import React from 'react'
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expensesTotal';
import numeral from 'numeral';

export const ExpensesSummary = ({count, total})=> {
const word = count === 1 ? 'expense' : 'expenses';
const finalTotal = numeral(total/ 100).format('$0,0.00');
    return(
        <div>
            <h3>Currently viewing {count} {word} totalling {finalTotal}</h3>
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