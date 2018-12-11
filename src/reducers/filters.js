import moment from 'moment';

//filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
export default (state=filtersReducerDefaultState, action)=> {
    switch(action.type){
        case 'FILTER_TEXT':
            return typeof action.text==='string' ? {...state, text:action.text} : {...state, text:''};

        case 'FILTER_SORT_BY':
            return {...state, sortBy: action.text};

        case 'SET_START_DATE':
            return {...state, startDate: action.date};

        case 'SET_END_DATE':
            return {...state, endDate: action.date};
                
        default:
            return state;
    };
};