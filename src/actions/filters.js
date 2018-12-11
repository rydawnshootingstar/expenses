

//filter text action
export const setTextFilter=(text='')=> ({
    type: 'FILTER_TEXT',
    text
});

export const sortByDate = ()=> ({
    type: 'FILTER_SORT_BY',
    text: 'date'
});

export const sortByAmount = ()=> ({
    type: 'FILTER_SORT_BY',
    text: 'amount'
});

export const setStartDate=(date)=> ({
    type: 'SET_START_DATE',
    date
});

export const setEndDate=(date)=> ({
    type: 'SET_END_DATE',
    date
});
