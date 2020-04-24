import React, { useState } from 'react';
import PropTypes from 'prop-types';
import app from '../../https/app';
import Header from '../Header/Header';
import Loader from '../ui/Loader/Loader';
import WaitingAreaStyles from './WaitingArea.style';
import labels from '../../config/labels/labels';
import { API_URL } from '../../utils/utils';
import GlobalStyles from '../globalStyle';

const WaitingArea = ({ gameId }) => {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    const gameData = await app.post(`${API_URL}/players`, {
      body: JSON.stringify({ gameId })
    });
    const { players: joinedPlayers, isStarted } = gameData;
    if (isStarted) {
      window.location.assign('/game');
    }
    setPlayers(joinedPlayers);
  };

  setTimeout(fetchPlayers, 1000);

  return (
    <div className="container">
      <Header title={labels.GAME_TITLE} />
      <div className="waiting-area">
        <p className="gameid">{`Game Id : ${gameId}`}</p>
        <ul className="players-info">
          {players.length &&
            players.map((player, index) => (
              <li key={player.playerId}>
                {index + 1}.{player.name}
                {labels.HAS_JOINED_LABEL}
              </li>
            ))}
        </ul>
        <Loader />
      </div>
      <style jsx>{WaitingAreaStyles}</style>
      <style jsx>{GlobalStyles}</style>
    </div>
  );
};

WaitingArea.propTypes = {
  gameId: PropTypes.oneOf([PropTypes.string, PropTypes.number])
};

WaitingArea.defaultProps = {
  gameId: -1
};
export default WaitingArea;
