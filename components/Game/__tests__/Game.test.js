import React from 'react';
import { shallow } from 'enzyme';
import Game from '../Game';

describe('Game', () => {
  const gameData = {
    players: [
      {
        name: 'test1',
        turn: true,
        id: 1
      },
      {
        name: 'test2',
        turn: false,
        id: 2
      },
      {
        name: 'test3',
        turn: false,
        id: 3
      },
      {
        name: 'test4',
        turn: false,
        id: 4
      }
    ]
  };

  it('should render properly', () => {
    const wrapper = shallow(<Game gameData={gameData} playerId={1} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
