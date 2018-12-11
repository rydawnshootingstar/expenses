import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
    
        }
    }


    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=> ({description}))
    };

    onNoteChange = (e)=> {
        const note = e.target.value;
        this.setState(()=> ({note}));
    };

    //doing it this way instead of checking the value on a user submit means that a user literally cannot
    //enter a value that does not match our specifications.
    onAmountChange = (e)=> {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){            //added !amount to allow users to clear the field
            this.setState(()=> ({amount}));
        }
    };

    onDateChange = (createdAt)=> {
        if(createdAt){
            this.setState(()=>({createdAt}));
        }
    };

    onFocusChange = ({focused})=> {
        this.setState(()=> ({calendarFocused: focused}));
    };

    onSubmit = (e)=> {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            //set error state 
            this.setState(()=>({error: 'description and amount fields are required!'}));
        }else{
            this.setState(()=> ({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render(){
        return (
            <div>
            {this.state.error!=='' && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" 
                    placeholder="Description" 
                    autoFocus 
                    value={this.state.description} 
                    onChange={this.onDescriptionChange}>
                    </input>

                    <input type="text" 
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    >
                    </input>

                    <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null - cmon dawg I got moments
                    onDateChange={this.onDateChange} // PropTypes.func.isRequired
                    focused={this.state.calendarFocused} // PropTypes.bool
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    id="your_unique_id" // PropTypes.string.isRequired,
                    />

                    <textarea 
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        );  
    }
}



