import React from 'react';
import { shallow } from 'enzyme';
import Home from '../home';

describe('home', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
