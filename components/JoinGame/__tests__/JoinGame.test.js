import React from 'react';
import { shallow } from 'enzyme';
import JoinGame from '../JoinGame';

describe('JoinGame', () => {
  it('should render properly', () => {
    const wrapper = shallow(<JoinGame />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
