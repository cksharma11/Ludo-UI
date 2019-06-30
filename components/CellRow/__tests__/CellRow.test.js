import React from 'react';
import { shallow } from 'enzyme';
import CellRow from '../CellRow';

describe('CellRow', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CellRow />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly with special id', () => {
    const wrapper = shallow(<CellRow specialCells={[1]} id={1} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
