import React from 'react';
import { shallow } from 'enzyme';
import CoinContainer from '../CoinContainer';

describe('CoinContainer', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CoinContainer />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
