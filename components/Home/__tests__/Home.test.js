import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

describe('Home', () => {
  it('should render properly', () => {
    const wrapper = shallow(
      <Home title="title" createGameLink="#" joinGameLink="#" />
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
