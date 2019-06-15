import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Header title="title" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
