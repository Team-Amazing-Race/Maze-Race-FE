import React from 'react';
import { shallow } from 'enzyme';
import About from '../About.js';

describe('About component', () => {
  it('renders About', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
