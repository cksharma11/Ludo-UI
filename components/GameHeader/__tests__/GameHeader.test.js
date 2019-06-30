import React from 'react';
import { shallow } from 'enzyme';
import GameHeader from '../GameHeader';

describe('GameHeader', () => {
  it('should render properly', () => {
    const wrapper = shallow(<GameHeader />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
