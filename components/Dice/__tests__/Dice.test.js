import React from 'react';
import { shallow } from 'enzyme';
import Dice from '../Dice';

describe('Dice', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Dice />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
