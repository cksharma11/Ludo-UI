import React from 'react';
import { shallow } from 'enzyme';
import CellRow from '../CellRow';

describe('CellRow', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CellRow color="red" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly with special id', () => {
    const wrapper = shallow(<CellRow color="red" />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
