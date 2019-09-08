import { findElementFromObjectArray, API_URL } from '../../utils/utils';
import app from '../../https/app';

const GameHook = ({ gameData = {}, playerId }) => {
  const { id, diceValue, currentPlayerIndex } = gameData;

  const rollDice = async () => {
    await app.post(`${API_URL}/rollDice`, {
      body: JSON.stringify({ gameId: id })
    });
  };

  const getDeactivatedCoins = (coins) => {
    return coins.filter((coin) => coin.position === 0);
  };

  const getCoins = (player) => (player ? player.coins : []);

  const isWindowPlayer = (player, windowPlayer) =>
    player.id === windowPlayer.id;

  const windowPlayer = findElementFromObjectArray({
    list: gameData.players,
    key: 'id',
    value: +playerId
  });

  return {
    currentPlayerIndex,
    rollDice,
    diceValue,
    windowPlayer,
    getDeactivatedCoins,
    getCoins,
    isWindowPlayer
  };
};

export default GameHook;
