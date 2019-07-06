import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player';

describe('Player', () => {
  let props;
  beforeEach(() => {
    props = {
      name: 'dummy',
      turn: false,
      coinData: [
        {
          color: 'red',
          isCleared: true
        },
        {
          color: 'red',
          isCleared: false
        },
        {
          color: 'red',
          isCleared: false
        },
        {
          color: 'red',
          isCleared: false
        }
      ]
    };
  });

  it('should render properly when turn is false', () => {
    const wrapper = shallow(<Player {...props} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly when turn is true', () => {
    props.turn = true;
    const wrapper = shallow(<Player {...props} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
