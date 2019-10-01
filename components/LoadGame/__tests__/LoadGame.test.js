import React from 'react';
import { shallow } from 'enzyme';
import LoadGame from '../LoadGame';

describe('LoadGame', () => {
  it('should render properly', () => {
    const wrapper = shallow(<LoadGame />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
