import {shallow} from 'enzyme';
import React from 'react';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

test('should render a Header correctly', ()=> {
    const wrapper = shallow(<Header />)

    expect(toJSON(wrapper)).toMatchSnapshot();



    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();

    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();       //when no snapshot exists, it creates one. when exists, it compares to existing
});