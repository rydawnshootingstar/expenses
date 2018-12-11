import selectExpenses from '../../selectors/expenses';
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


test('should filter by text value', ()=> {
    const filters = {
        text: 'a',
        sortBy: 'date',
        startDate: undefined, 
        endDate: undefined
    };
    const result = selectExpenses(testExpenses, filters);

    expect(result).toEqual([
        testExpenses[2], testExpenses[3]
    ]);
});

test('should filter by start date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: ''
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([
        testExpenses[1], testExpenses[2], testExpenses[0]
    ]);
});

test('should filter by end date', ()=> {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: '',
        endDate: moment(0).subtract(2,'days')
    };

    const result = selectExpenses(testExpenses, filters);

    expect(result).toEqual([
        testExpenses[3]
    ]);
});

test('should sort by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: '',
        endDate: ''
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([
        testExpenses[1], testExpenses[2], testExpenses[0], testExpenses[3]
    ]);
});

test('should sort by amount', ()=> {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: '',
        endDate: ''
    };
    const result = selectExpenses(testExpenses, filters);
    expect(result).toEqual([
        testExpenses[2], testExpenses[1], testExpenses[0], testExpenses[3]
    ]);
});