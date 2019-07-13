/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import DiceStyles from './Dice.style';
import diceImages from '../../config/images/dice-images';
import noop from '../../config/utils/noop';

const Dice = ({ diceValue, onRollDice }) => {
  return (
    <div>
      <img src={diceImages[diceValue]} alt="dice" onClick={onRollDice} />
      <style jsx>{DiceStyles}</style>
    </div>
  );
};

Dice.defaultProps = {
  diceValue: 1,
  onRollDice: noop
};

Dice.propTypes = {
  diceValue: PropTypes.number,
  onRollDice: PropTypes.func
};

export default Dice;
