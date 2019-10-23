import React from 'react';
import PropTypes from 'prop-types';
import CoinStyles from './Coin.style';
import app from '../../https/app';
import { API_URL } from '../../utils/utils';

const Coin = ({ color, id, gameData }) => {
  const changeCoinPosition = () => {
    app.post(`${API_URL}/changeCoinPosition`, {
      body: JSON.stringify({ id, gameId: gameData.id })
    });
  };
  return (
    <button
      type="button"
      className={`coin dark_${color}`}
      onClick={changeCoinPosition}
    >
      <style jsx>{CoinStyles}</style>
    </button>
  );
};

Coin.defaultProps = {
  color: ''
};

Coin.propTypes = {
  color: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Coin;
