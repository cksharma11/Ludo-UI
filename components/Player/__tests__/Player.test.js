import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player';

describe('Player', () => {
  let player;
  beforeEach(() => {
    player = {
      name: 'dummy',
      turn: false,
      coins: [
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
    const wrapper = shallow(<Player player={player} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly when turn is true', () => {
    player.turn = true;
    const wrapper = shallow(<Player player={player} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
