import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseListItem from '../../components/ExpenseListItem'
import {testExpenses}from '../fixtures';

test('should render an expense with info',()=> {
    const wrapper = shallow(<ExpenseListItem {...testExpenses[0]}/>);
    console.log(toJSON(wrapper));
    expect(toJSON(wrapper)).toMatchSnapshot();
});