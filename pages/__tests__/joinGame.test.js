import React from 'react';
import { shallow } from 'enzyme';
import JoinGame from '../joinGame';

describe('joinGame', () => {
  it('should render properly', () => {
    const wrapper = shallow(<JoinGame />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
