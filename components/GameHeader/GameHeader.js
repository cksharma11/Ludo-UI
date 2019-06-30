import React from 'react';
import PropTypes from 'prop-types';
import GameHeaderStyles from './GameHeader.style';

const GameHeader = ({ title, playerName }) => {
  return (
    <header>
      <div id="title">{title}</div>
      <div id="player_name">{playerName}</div>
      <style jsx>{GameHeaderStyles}</style>
    </header>
  );
};

GameHeader.defaultProps = {
  title: '',
  playerName: ''
};

GameHeader.propTypes = {
  title: PropTypes.string,
  playerName: PropTypes.string
};

export default GameHeader;
