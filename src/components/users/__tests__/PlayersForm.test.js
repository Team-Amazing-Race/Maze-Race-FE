import React from 'react';
import { shallow } from 'enzyme';
import PlayersForm from '../PlayersForm.js';

describe('PlayersForm component', () => {
  it('renders PlayersForm', () => {
    const wrapper = shallow(<PlayersForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
