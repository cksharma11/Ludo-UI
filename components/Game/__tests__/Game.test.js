import React from 'react';
import { shallow } from 'enzyme';
import Game from '../Game';

describe('Game', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
