import React from 'react';
import { shallow } from 'enzyme';
import ResultMessage from '../ResultMessage.js';

describe('ResultMessage component', () => {
  it('renders ResultMessage', () => {
    const wrapper = shallow(<ResultMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});
