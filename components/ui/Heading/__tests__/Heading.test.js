import React from 'react';
import { shallow } from 'enzyme';
import Heading from '../Heading';

describe('Heading', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
