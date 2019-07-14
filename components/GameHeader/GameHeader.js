import React from 'react';
import PropTypes from 'prop-types';
import GameHeaderStyles from './GameHeader.style';

const GameHeader = ({ playerName }) => {
  return (
    <header>
      <div id="title">Ludo</div>
      <div id="player_name">Hi {playerName}!</div>
      <style jsx>{GameHeaderStyles}</style>
    </header>
  );
};

GameHeader.defaultProps = {
  playerName: ''
};

GameHeader.propTypes = {
  playerName: PropTypes.string
};

export default GameHeader;
