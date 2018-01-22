import React from 'react';
import Header from './index';
import { shallow } from 'enzyme';

describe('always render subcomponents', () => {
    const wrapper = shallow(
        <Header isAuthenticated={true} />
    );

    test('always renders header', () => {
        const header = wrapper.find('header');
        expect(header.length).toBe(1);
    });

    test('always renders an h1', () => {
        const h1 = wrapper.find('h1');
        expect(h1.length).toBe(1);
    });

    test('always renders 3 NavLink components', () => {
        const navLinks = wrapper.find('NavLink');
        expect(navLinks.length).toBe(3);
    });
});

test('NavLink change when isAuthenticated is true or false', () => {
    let wrapper;

    wrapper = shallow(
        <Header isAuthenticated={true} />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(
        <Header isAuthenticated={false} />
    );

    expect(wrapper).toMatchSnapshot();
});
