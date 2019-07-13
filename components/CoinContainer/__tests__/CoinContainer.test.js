import React from 'react';
import { shallow } from 'enzyme';
import CoinContainer from '../CoinContainer';

describe('CoinContainer', () => {
  it('should render properly with coin', () => {
    const wrapper = shallow(<CoinContainer />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly without coin', () => {
    const wrapper = shallow(<CoinContainer showCoins />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
