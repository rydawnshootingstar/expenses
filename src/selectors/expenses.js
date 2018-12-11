import moment from 'moment';

//get visible expenses (filtered)
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=> {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;                     //if any of these don't match, the expense will not be a match and won't be shown
    }).sort((a,b)=> {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }

    });
};