import React from 'react';
import { shallow } from 'enzyme';
import AboutCard from '../AboutCard.js';

describe('AboutCard component', () => {
  it('renders AboutCard', () => {
    const wrapper = shallow(<AboutCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
