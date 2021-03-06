import React from 'react';
import PropTypes from 'prop-types';
import CoinStyles from './Coin.style';
import app from '../../https/app';
import { API_URL } from '../../utils/utils';

const Coin = ({ color, id, gameData, playerId, isPlayable }) => {
  const changeCoinPosition = () => {
    app.post(`${API_URL}/changeCoinPosition`, {
      body: JSON.stringify({ id, gameId: gameData.id, playerId, color })
    });
  };
  return (
    <button
      type="button"
      className={`coin dark_${color} ${isPlayable ? 'playable-coin' : ''}`}
      onClick={changeCoinPosition}
      id={`${color}_${id}`}
    >
      <style jsx>{CoinStyles}</style>
    </button>
  );
};

Coin.defaultProps = {
  color: '',
  isPlayable: false
};

Coin.propTypes = {
  color: PropTypes.string,
  id: PropTypes.number.isRequired,
  gameData: PropTypes.object.isRequired,
  playerId: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  isPlayable: PropTypes.bool
};

export default Coin;
