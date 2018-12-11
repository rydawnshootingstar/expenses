import {setEndDate,setStartDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('should create a text filter action with input', ()=> {
    const action = setTextFilter('filter this');
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: 'filter this'
    });
});

test('should create a text filter action with default value', ()=> {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'FILTER_TEXT',
        text: ''
    });
});

test('should generate set start date action', ()=> {
    const action =setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('should generate set end date action', ()=> {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        date: moment(0)
    });
});

test('should generate a sort by amount action', ()=> {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'FILTER_SORT_BY',
        text: 'amount'
    })
});

test('should generate a sort by date filter', ()=> {
    const action = sortByDate();
    expect(action).toEqual({
        type:'FILTER_SORT_BY',
        text: 'date'
    })
});