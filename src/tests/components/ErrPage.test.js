import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ErrPage from '../../components/ErrPage';

test('should render an error page',()=> {
    const wrapper = shallow(<ErrPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});