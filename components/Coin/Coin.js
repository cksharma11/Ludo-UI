import React from 'react';
import PropTypes from 'prop-types';
import CoinStyles from './Coin.style';

const Coin = ({ color }) => {
  return (
    <div className={`coin dark_${color}`}>
      <style jsx>{CoinStyles}</style>
    </div>
  );
};

Coin.defaultProps = {
  color: ''
};

Coin.propTypes = {
  color: PropTypes.string
};

export default Coin;
