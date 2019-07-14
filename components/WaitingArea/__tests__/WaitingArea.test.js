import React from 'react';
import { shallow } from 'enzyme';
import app from '../../../https/app';
import WaitingArea from '../WaitingArea';

jest.mock('../../../https/app');
jest.useFakeTimers();

describe('WaitingArea', () => {
  it('should render properly', () => {
    const gameId = 1;
    const players = [{ name: 'jhon', playerId: 123 }];
    const wrapper = shallow(<WaitingArea gameId={gameId} players={players} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render properly when game is not started', () => {
    app.post.mockImplementation(() =>
      Promise.resolve({
        joinedPlayers: [
          {
            playerName: 'dummyName',
            playerId: 'dummyId',
            color: 'red',
            coins: { 1: 0, 2: 0, 3: 0, 4: 0 }
          }
        ],
        isStarted: false
      })
    );

    const gameId = 1;
    const players = [{ name: 'jhon', playerId: 123 }];
    const wrapper = shallow(<WaitingArea gameId={gameId} players={players} />);
    expect(wrapper.debug()).toMatchSnapshot();
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it('should render properly when game is started', () => {
    window.location.assign = jest.fn();
    app.post.mockImplementation(() =>
      Promise.resolve({
        joinedPlayers: [
          {
            playerName: 'dummyName',
            playerId: 'dummyId',
            color: 'red',
            coins: { 1: 0, 2: 0, 3: 0, 4: 0 }
          }
        ],
        isStarted: true
      })
    );

    const gameId = 1;
    const players = [{ name: 'jhon', playerId: 123 }];
    const wrapper = shallow(<WaitingArea gameId={gameId} players={players} />);
    expect(wrapper.debug()).toMatchSnapshot();
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
