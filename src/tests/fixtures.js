import moment from 'moment';

export const testExpenses = [
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