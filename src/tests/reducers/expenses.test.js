import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const testExpenses = [
    {
        id: '1',
        description: 'exp 1',
        amount: 111,
        notes: '',
        createdAt: 0
    },
    {
        id: '2',
        description: 'exp 2',
        amount: 222,
        notes: '',
        createdAt: moment(0).add(4,'days').valueOf()
    },
    {
        id: '3',
        description: 'aaaa',
        amount: 333,
        notes: '',
        createdAt: 3333
    },
    {
        id: '4',
        description: 'aaab',
        amount: 0,
        notes: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
];


test('should add an expense', ()=> {
    const action = {
        type:'ADD_EXPENSE',
        expense: {
        id: '7',
        description: 'description',
        amount: 600,
        createdAt: 2,
        notes: ''
        }};
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([...testExpenses,{
        id: '7',
        description: 'description',
        amount: 600,
        createdAt: 2,
        notes: ''
    }])
});

test('should remove an expense', ()=> {
    const action = {
    type:'REMOVE_EXPENSE',
    id: '1'
    };
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([
        testExpenses[1], testExpenses[2], testExpenses[3]
    ]);
});

test('should NOT remove an expense', ()=> {
    const action = {
        type:'REMOVE_EXPENSE',
        expense:{
        id: '6'
        }};
        const state = expensesReducer(testExpenses, action);
        expect(state).toEqual([
            testExpenses[0],testExpenses[1], testExpenses[2], testExpenses[3]
        ]);
});

test('should set default state', ()=> {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should edit an existing expense', ()=> {
    const action = {
        type:'EDIT_EXPENSE',
        id: '1',
        updates: {
        description: 'description'
        }};

    const state =expensesReducer(testExpenses, action);
    expect(state).toEqual([
        {id: '1',
        description: 'description',
        amount: 111,
        notes: '',
        createdAt: 0
        }, testExpenses[1],testExpenses[2],testExpenses[3]
    ])
});

test('should NOT edit an existing expense', ()=> {
    const action = {
        type:'EDIT_EXPENSE',
        id: '20',
        updates: {
        description: 'description'
        }};
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([
        testExpenses[0],testExpenses[1],testExpenses[2],testExpenses[3]
    ])
});

//sets just 1 
test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [testExpenses[1]]
    }
    const state = expensesReducer(testExpenses, action);
    expect(state).toEqual([testExpenses[1]]);
});