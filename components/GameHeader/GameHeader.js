/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import GameHeaderStyles from './GameHeader.style';
import app from '../../https/app';
import { API_URL } from '../../utils/utils';

const GameHeader = ({ playerName, gameId }) => {
  const saveGameHandler = async () => {
    const response = await app.post(`${API_URL}/saveGame`, {
      body: JSON.stringify({ gameId })
    });
    alert(response);
  };

  return (
    <header>
      <div id="title">Ludo</div>
      <div id="player_name">Hi {playerName}!</div>
      <button type="button" onClick={saveGameHandler}>
        Save Game
      </button>
      <style jsx>{GameHeaderStyles}</style>
    </header>
  );
};

GameHeader.defaultProps = {
  playerName: '',
  gameId: -1
};

GameHeader.propTypes = {
  playerName: PropTypes.string,
  gameId: PropTypes.number
};

export default GameHeader;
