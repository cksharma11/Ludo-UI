import { useState } from 'react';

const GameHook = ({ gameData: initialGameData }) => {
  const numberOfPlayer = initialGameData.players.length;
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [diceValue, setDiceValue] = useState(1);

  const updateCurrentPlayerIndex = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % numberOfPlayer);
  };

  const getDiceValue = () => {
    return Math.ceil(Math.random() * 6);
  };

  const rollDice = () => {
    setDiceValue(getDiceValue());
  };

  return {
    updateCurrentPlayerIndex,
    currentPlayerIndex,
    rollDice,
    diceValue
  };
};

export default GameHook;
