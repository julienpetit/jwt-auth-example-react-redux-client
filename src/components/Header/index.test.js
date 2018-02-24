import React from 'react';
import Header from './index';
import { shallowWithIntl } from '../../helpers/intl-enzyme-test-helper.js';

describe('always render subcomponents', () => {
  const wrapper = shallowWithIntl(<Header isAuthenticated={true} />).dive();

  test('always renders header', () => {
    const header = wrapper.find('header');
    expect(header.length).toBe(1);
  });

  test('always renders an h1', () => {
    const h1 = wrapper.find('h1');
    expect(h1.length).toBe(1);
  });
});

test('NavLink change when isAuthenticated is true or false', () => {
  let wrapper;

  wrapper = shallowWithIntl(<Header isAuthenticated={true} />);

  expect(wrapper).toMatchSnapshot();

  wrapper = shallowWithIntl(<Header isAuthenticated={false} />);

  expect(wrapper).toMatchSnapshot();
});
