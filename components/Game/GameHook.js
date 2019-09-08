import { findElementFromObjectArray, API_URL } from '../../utils/utils';
import app from '../../https/app';

const GameHook = ({ gameData = {}, playerId = 1702 }) => {
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

  const { name: windowPlayer } = findElementFromObjectArray(
    gameData.players,
    'id',
    +playerId
  );

  return {
    currentPlayerIndex,
    rollDice,
    diceValue,
    windowPlayer,
    getDeactivatedCoins,
    getCoins
  };
};

export default GameHook;
