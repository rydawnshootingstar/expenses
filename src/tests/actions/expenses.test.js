import {startAddExpense, startSetExpenses, startRemoveExpense, addExpense, removeExpense, editExpense, setExpenses} from '../../actions/expenses';
import {testExpenses} from '../fixtures';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {database} from '../../firebase/firebase';

//pass array of middleware we want to use
const createMockStore = configureMockStore([thunk]);

//don't finish each test until firebase has added our fresh test case data to the DB
beforeEach((done)=> {
    const expensesData = {};
    testExpenses.forEach(({id,description,notes,amount,createdAt})=> {
        expensesData[id] = { description, notes, amount, createdAt}
    });
    database.ref('expenses').set(expensesData).then(()=> {
        done();
    });
});

const testExpense={
    id: 'default',
    description: 'default_description',
    note: '',
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
        note: 'noice'
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
                note: ''
            }
        });
        //fetch thing we added from DB and return it to chain
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toEqual({
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
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
});

test('should set up set expense action object with data ', ()=> {
    const action = setExpenses(testExpenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: testExpenses
    });
});

test('should fetch expeneses from firebase', (done)=> {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: testExpenses
        });
        done();
    })
})

test('should remove an expense from firebase', (done)=> {
    const store = createMockStore({});
    const id = testExpenses[2].id;
    store.dispatch(startRemoveExpense({id})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot)=> {
        expect(snapshot.val()).toBeNull;
        done();
    });
});