import React from 'react';
import { shallow } from 'enzyme';
import CreateGame from '../createGame';

describe('createGame', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CreateGame />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
