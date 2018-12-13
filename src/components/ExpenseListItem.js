import React from 'react'
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';


const ExpenseListItem = ({id, description, amount, createdAt})=> (
    <div>
    <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>Cost: {numeral(amount / 100).format('$0,0.00')}</p>
        <p>Created On: {moment(createdAt).format('MMM Do, YYYY')}</p>
    </div>
);


export default (ExpenseListItem);