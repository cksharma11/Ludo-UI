import React from 'react';
import { shallow } from 'enzyme';
import app from '../../../https/app';
import WaitingArea from '../WaitingArea';

describe('WaitingArea', () => {
  it('should render properly', () => {
    const gameId = 1;
    const players = [{ name: 'jhon', playerId: 123 }];

    global.setInterval = jest.fn().mockImplementation((callback) => callback());

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });

    app.get = jest.fn().mockImplementation(() => mockFetchPromise);

    // expect(app.get).toHaveBeenCalledTimes(1);
    // expect(app.get).toHaveBeenCalledWith('/players');

    const wrapper = shallow(<WaitingArea gameId={gameId} players={players} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
