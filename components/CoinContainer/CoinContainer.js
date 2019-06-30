import React from 'react';
import PropTypes from 'prop-types';
import CoinContainerStyles from './CoinContainer.style';

const CoinContainer = ({ playerId, color }) => {
  return (
    <div className="coin_container" id={playerId}>
      <div className="container-border">
        <div className="container_row">
          <div id={`${color}_coin_100`} className={`coin ${color}`} />
          <div id={`${color}_coin_200`} className={`coin ${color}`} />
        </div>
        <div className="container_row">
          <div id={`${color}_coin_300`} className={`coin ${color}`} />
          <div id={`${color}_coin_400`} className={`coin ${color}`} />
        </div>
      </div>
      <style jsx>{CoinContainerStyles}</style>
    </div>
  );
};

CoinContainer.defaultProps = {
  playerId: 0,
  color: ''
};

CoinContainer.propTypes = {
  playerId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string
};

export default CoinContainer;
