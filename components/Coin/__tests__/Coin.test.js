import React from 'react';
import { shallow } from 'enzyme';
import Coin from '../Coin';

describe('Coin', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Coin />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
