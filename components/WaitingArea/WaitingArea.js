import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import app from '../../https/app';
import Header from '../Header/Header';
import Loader from '../ui/Loader/Loader';
import WaitingAreaStyles from './WaitingArea.style';
import labels from '../../config/labels/labels';
import { API_URL } from '../../utils/utils';

const WaitingArea = ({ gameId, players: initialPlayers }) => {
  const [players, setPlayers] = useState(initialPlayers);

  const fetchPlayers = async () => {
    const gameData = await app.post(`${API_URL}/players`, {
      body: JSON.stringify({ gameId })
    });
    const { joinedPlayers, isStarted } = gameData;
    if (isStarted) {
      window.location.assign('/game');
    }
    setPlayers(joinedPlayers);
  };

  setTimeout(fetchPlayers, 1000);

  return (
    <Fragment>
      <Header title={labels.GAME_TITLE} />
      <div className="waiting-area">
        <p className="gameid">{`Game Id : ${gameId}`}</p>
        <ul className="players-info">
          {players.length &&
            players.map((player, index) => (
              <li key={player.playerId}>
                {index + 1}.{player.playerName}
                {labels.HAS_JOINED_LABEL}
              </li>
            ))}
        </ul>
        <Loader />
        <style jsx>{WaitingAreaStyles}</style>
      </div>
    </Fragment>
  );
};

WaitingArea.propTypes = {
  gameId: PropTypes.number,
  players: PropTypes.arrayOf(PropTypes.object)
};

WaitingArea.defaultProps = {
  gameId: -1,
  players: []
};
export default WaitingArea;
