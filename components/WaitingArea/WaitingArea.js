import React, { useState } from 'react';
import PropTypes from 'prop-types';
import app from '../../https/app';
import Header from '../Header/Header';
import Loader from '../ui/Loader/Loader';
import Heading from '../ui/Heading/Heading';
import WaitingAreaStyles from './WaitingArea.style';
import labels from '../../config/labels/labels';

const WaitingArea = ({ gameId, players: initialPlayers }) => {
  const [players, setPlayers] = useState(initialPlayers);

  const fetchPlayers = () => {
    app
      .get('/players')
      .then((res) => res.json())
      .then((joinedPlayers) => setPlayers(joinedPlayers));
  };

  setInterval(() => {
    fetchPlayers();
  }, 1000);

  return (
    <div className="waiting-area">
      <Header title={labels.GAME_TITLE} />
      <Heading content={gameId} weight="h1" />
      <ul className="players-info">
        {players.map((player) => (
          <li key={player.playerId} className="player-name">
            {player.name}
            {labels.HAS_JOINED_LABEL}
          </li>
        ))}
      </ul>
      <Loader />
      <style jsx>{WaitingAreaStyles}</style>
    </div>
  );
};

WaitingArea.propTypes = {
  gameId: PropTypes.number.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default WaitingArea;
