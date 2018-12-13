import uuid from 'uuid';
import expenseDB from '../firebase/firebase';

//add expense action
//destructure object passed in, if none exists, set to empty obj
export const addExpense = (expense={})=> ({
    type:'ADD_EXPENSE',
    expense
});

//destructure object passed in and set defaults
export const startAddExpense = (expenseData = {})=> {
    //thunk gives us ability to return funcitons, use dispatch
    return (dispatch) => {
        const {
            description='',
            notes='',
            amount=0,
            createdAt=0
        } = expenseData;
        const expense = {description,notes, amount, createdAt};
        return expenseDB.push(expense).then((ref)=> {
            //add to state after it's finished pushing to DB with the ID generated by firebase
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })

    }
}

//remove expense action
export const removeExpense = ({ id }={})=> ({
    type: 'REMOVE_EXPENSE',
    id
});

//edit an expense action
export const editExpense= (id, updates)=> ({
    type: 'EDIT_EXPENSE',
    id, updates
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=> {
    return(dispatch)=>{
        return expenseDB.once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((expense)=> {
                expenses.push({
                    id: expense.key,
                    ...expense.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};