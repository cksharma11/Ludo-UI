import React, { useState, useContext } from 'react';
import createContainer from 'constate';

function useGameContext({ gameData: initialGameData, playerId, gameId }) {
  const [gameData, setGameData] = useState(initialGameData);
  return {
    gameData,
    setGameData,
    playerId,
    gameId
  };
}

const GameContext = createContainer(useGameContext);

const withGameContext = (WrappedComponent) => {
  const ComponentWithGameContext = (props) => {
    const { gameData, playerId, gameId } = useContext(GameContext.Context);
    return (
      <WrappedComponent
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        gameData={gameData}
        playerId={playerId}
        gameId={gameId}
      />
    );
  };
  return ComponentWithGameContext;
};

export default GameContext;
export { withGameContext };
