import React from 'react';
import { mount } from 'enzyme';
import Game from '../Game';

describe('Game', () => {
  const gameData = {
    players: [
      {
        playerName: 'test1',
        turn: true,
        playerId: 1
      },
      {
        playerName: 'test2',
        turn: false,
        playerId: 2
      },
      {
        playerName: 'test3',
        turn: false,
        playerId: 3
      },
      {
        playerName: 'test4',
        turn: false,
        playerId: 4
      }
    ]
  };

  it('should render properly', () => {
    const wrapper = mount(<Game gameData={gameData} playerId={1} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
