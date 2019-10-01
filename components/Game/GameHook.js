import { findElementFromObjectArray, API_URL } from '../../utils/utils';
import app from '../../https/app';

const useGameHook = ({ gameData = {}, playerId }) => {
  const { id, diceValue, currentPlayerIndex } = gameData;

  const rollDice = async () => {
    await app.post(`${API_URL}/rollDice`, {
      body: JSON.stringify({ gameId: id })
    });
  };

  const getInactiveCoins = (coins) => {
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

  const cellRowConfigs = {
    0: {
      className: 'cell_row',
      color: 'blue',
      containerClass: ''
    },
    1: {
      className: 'cell_column',
      color: 'red',
      containerClass: 'cell_column_container'
    },
    2: {
      className: 'cell_column',
      color: 'yellow',
      containerClass: 'cell_column_container'
    },
    3: {
      className: 'cell_row',
      color: 'green',
      containerClass: ''
    }
  };

  return {
    currentPlayerIndex,
    rollDice,
    diceValue,
    windowPlayer,
    getInactiveCoins,
    getCoins,
    isWindowPlayer,
    cellRowConfigs
  };
};

export default useGameHook;
