import React from 'react';
import PropTypes from 'prop-types';
import DiceStyles from './Dice.style';
import diceImages from '../../config/images/dice-images';

const Dice = ({ diceValue }) => {
  return (
    <div>
      <img src={diceImages[diceValue]} alt="dice" id="dice" />
      <style jsx>{DiceStyles}</style>
    </div>
  );
};

Dice.defaultProps = {
  diceValue: 1
};

Dice.propTypes = {
  diceValue: PropTypes.number
};

export default Dice;
