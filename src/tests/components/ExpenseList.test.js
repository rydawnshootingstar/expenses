import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme';
import React from 'react';
import toJSON from 'enzyme-to-json';
import {testExpenses}from '../fixtures';

test('should render an expense list', ()=> {
    const wrapper = shallow(<ExpenseList expenses={testExpenses}/>);

    expect(toJSON(wrapper)).toMatchSnapshot();
});