import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

const testExpense={
    id: 'default',
    description: 'default_description',
    notes: '',
    amount: '',
    createdAt: 'never'
}

test('should set up remove expense action object', ()=> {
    const action = removeExpense(testExpense);
    //toEqual is for arrays and objects
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'default'
    });
})

test('should set up add expense action object with values', ()=> {
    const expenseData ={
        description:'description', 
        amount: 5000, 
        createdAt:1000, 
        notes: 'note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
        ...expenseData,
        id: expect.any(String)    //true for any string we get
        }
    });
})

test('should set up add expense action object with no values', ()=> {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description: '',
            amount: 0,
            notes: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
})

test('should set up edit expense action object', ()=> {
    const action = editExpense(testExpense.id, {description:'new description'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'default',
        updates: {description: 'new description'}
    })
})