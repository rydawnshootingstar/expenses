import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



class ExpenseListFilters extends React.Component{

    constructor(props){
        super(props);
        this.state={
            calendarFocused: null
        }
    }

    onDatesChange=({startDate, endDate})=> {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=> ({calendarFocused}));
    };
    

    render (){ 
    return(
        <div className="content-container">
        <div className="input-group">
            <div className="input-group__item">
                <input 
                    className="text-input"
                    type="text" 
                    placeholder="Search expenses"
                    value={this.props.filters.text} 
                    onChange={(e)=>{
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}>
                </input>
            </div>
            <div className="input-group__item">
                <select 
                    className="select"
                    onChange={(e)=> {
                        if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        }else if(e.target.value ==='amount'){
                            this.props.dispatch(sortByAmount());
                        }
                    }}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                </select>
            </div>
            <div className="input-group__item">
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="date_from"
                    endDate={this.props.filters.endDate}
                    endDateId="date_to"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                />
            </div>
        </div>
    </div>
    )};
}

const mapStateToProps = (state)=> {
    return {
        filters: state.filters
    };
};

//when we connect to our redux store, we don't just get store.filters, but store.dispatch. In order to use any specific actions
//we must import them
export default connect(mapStateToProps)(ExpenseListFilters);


