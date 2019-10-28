import React from 'react';
import PropTypes from 'prop-types';
import { CongratulationsPopupStyles } from './CongratulationsPopup.style';
import labels from '../../config/labels/labels';

const CongratulationsPopup = ({ player }) => {
  return (
    <div className="congo-popup">
      <h1 className="player-name">{player.name}</h1>
      <h3 className="message">{labels.WINNING_LABEL}</h3>
      <style jsx>{CongratulationsPopupStyles}</style>
    </div>
  );
};

CongratulationsPopup.propTypes = {
  player: PropTypes.object.isRequired
};
