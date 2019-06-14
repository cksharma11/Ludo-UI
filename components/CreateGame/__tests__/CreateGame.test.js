import { shallow } from 'enzyme';
import React from 'react';
import CreateGame from '../CreateGame';

describe('CreateGame', () => {
  it('should render properly', () => {
    const wrapper = shallow(<CreateGame />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
