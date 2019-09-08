import React from 'react';
import { shallow } from 'enzyme';
import Dice from '../Dice';

describe('Dice', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Dice />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('onRollDice should be onClick if windowPlayer has trun ', () => {
    const wrapper = shallow(<Dice isWindowPlayer />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
