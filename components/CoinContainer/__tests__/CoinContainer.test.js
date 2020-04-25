import React from 'react';
import { shallow } from 'enzyme';
import CoinContainer from '../CoinContainer';

describe('CoinContainer', () => {
  it('should render properly with coin', () => {
    const wrapper = shallow(<CoinContainer gameData={{ coinsPosition: [] }} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly without coin', () => {
    const wrapper = shallow(
      <CoinContainer showCoins gameData={{ coinsPosition: [] }} />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
