import { useState } from 'react';
import { findElementFromObjectArray } from '../../utils/utils';

const GameHook = ({ gameData = {}, playerId }) => {
  const numberOfPlayer =
    gameData && gameData.players && gameData.players.length;
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceValue, setDiceValue] = useState(1);

  const updateCurrentPlayerIndex = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % numberOfPlayer);
  };

  const getDiceValue = () => {
    return Math.ceil(Math.random() * 6);
  };

  const isDiceRolledSix = (value) => value === 6;

  const rollDice = () => {
    setDiceValue(getDiceValue());
    if (!isDiceRolledSix(diceValue)) {
      updateCurrentPlayerIndex();
    }
  };

  const { name: windowPlayer } = findElementFromObjectArray(
    gameData.players,
    'id',
    +playerId
  );

  return {
    updateCurrentPlayerIndex,
    currentPlayerIndex,
    rollDice,
    diceValue,
    windowPlayer
  };
};

export default GameHook;
