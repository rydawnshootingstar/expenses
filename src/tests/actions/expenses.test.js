import {startAddExpense, addExpense, removeExpense, editExpense} from '../../actions/expenses';
import {testExpenses} from '../fixtures';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {database} from '../../firebase/firebase';

//pass array of middleware we want to use
const createMockStore = configureMockStore([thunk])

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
    const action = addExpense(testExpenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: testExpenses[2]
        
    });
});

//test cannot pass until done() is called
test('shoud add expense with data to database + store', (done)=> {
    const store = createMockStore({});

    const expenseData = {
        description: 'aaa',
        amount: 600,
        createdAt: 98760987,
        notes: 'noice'
    }
    //dispatch action, which writes to DB
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        //fetch thing we added from DB and return it to chain
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });;
});

test('shoud add default expense to database + store', (done)=> {
    const store = createMockStore({});

    const expenseData = {};
    //dispatch action, which writes to DB
    store.dispatch(startAddExpense(expenseData)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description: '',
                amount: 0,
                createdAt: 0,
                notes: ''
            }
        });
        //fetch thing we added from DB and return it to chain
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual({
            description: '',
            amount: 0,
            createdAt: 0,
            notes: ''
        });
        done();
    });;
});

// test('should set up add expense action object with no values', ()=> {
//     const action = addExpense();
//     expect(action).toEqual({
//         type:'ADD_EXPENSE',
//         expense:{
//             description: '',
//             amount: 0,
//             notes: '',
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })

test('should set up edit expense action object', ()=> {
    const action = editExpense(testExpense.id, {description:'new description'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'default',
        updates: {description: 'new description'}
    })
})