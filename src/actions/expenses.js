import uuid from 'uuid';

//add expense action
//destructure object passed in, if none exists, set to empty obj
export const addExpense = ({description='', notes='', amount=0,createdAt=0 }={})=> ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
});

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