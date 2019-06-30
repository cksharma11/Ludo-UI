import React from 'react';
import { shallow } from 'enzyme';
import Cell from '../Cell';

describe('Cell', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Cell />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
