
//expenses reducer
const expensesReducerDefaultState = [];
export default (state=expensesReducerDefaultState, action)=> {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];  //spread operator - creates new array
                                    
        case 'REMOVE_EXPENSE':
            return state.filter(({ id })=> id!==action.id);   //filter creates new array 

        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if(expense.id === action.id){
                    return {
                        ...expense, 
                        ...action.updates}      //spreads both objects out, effectively edits existing 
                }else{
                    return expense;                             //no change unless our criteria matches
                };
            });

        default:
            return state;
    };
};