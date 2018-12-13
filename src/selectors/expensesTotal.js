export default (expenses) => {
        //create array with only amount values
        return expenses.map((expense)=> {
            return expense.amount;
        //reduce array of amount values to single value
        }).reduce((sum, val)=> {
            return sum + val;
        },0);
};


