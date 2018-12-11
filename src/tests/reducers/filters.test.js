import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', ()=> {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sort by to amount', ()=> {
    const state = filtersReducer(undefined, {type: 'FILTER_SORT_BY', text: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', ()=> {
    const state = filtersReducer(undefined, {type: 'FILTER_SORT_BY', text: 'date'});
    expect(state.sortBy).toBe('date');
});

test('should set up a text filter', ()=> { 
    const state = filtersReducer(undefined, {type: 'FILTER_TEXT', text: 'search'});
    expect(state.text).toBe('search');
});

test('should state start date filter', ()=> {
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date: moment(0)});
    expect(state.startDate).toEqual(moment(0));
});

test('should state end date filter', ()=> {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date: moment(0)});
    expect(state.endDate).toEqual(moment(0));
});