import React from 'react';
import { shallow } from 'enzyme';
import PlayerCard from '../PlayerCard.js';

describe('PlayerCard component', () => {
  it('renders PlayerCard', () => {
    const wrapper = shallow(<PlayerCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
