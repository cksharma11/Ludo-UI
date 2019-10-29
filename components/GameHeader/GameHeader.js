/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import GameHeaderStyles from './GameHeader.style';
import app from '../../https/app';
import { API_URL } from '../../utils/utils';

const GameHeader = ({ playerName, gameId }) => {
  const saveGameHandler = async () => {
    await app.post(`${API_URL}/saveGame`, {
      body: JSON.stringify({ gameId })
    });
    alert('saved');
  };

  return (
    <header>
      <div id="player_name">Hi {playerName}!</div>
      <div id="title">Ludo</div>
      <div className="controls">
        <button type="button" onClick={saveGameHandler}>
          Save Game
        </button>
        <button type="button" onClick={saveGameHandler}>
          Activity Log
        </button>
      </div>
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
  gameId: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

export default GameHeader;
