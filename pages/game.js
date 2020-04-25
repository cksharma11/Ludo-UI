/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import regeneratorRuntime from 'regenerator-runtime';
import PropTypes from 'prop-types';
import Game from '../components/Game/Game';
import { parseCookie, API_URL } from '../utils/utils';
import app from '../https/app';
import GlobalStyles from '../components/globalStyles';

const GamePage = ({ gameData, playerId, gameId }) => {
  return (
    <Fragment>
      <Game gameData={gameData} playerId={playerId} gameId={gameId} />
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
};

GamePage.defaultProps = {
  gameData: {},
  playerId: 0,
  gameId: 0
};

GamePage.propTypes = {
  gameData: PropTypes.object,
  playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gameId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

GamePage.getInitialProps = async ({ req }) => {
  const cookies = parseCookie(req.headers.cookie);
  const { gameId, playerId } = cookies;
  const gameData = await app.post(`${API_URL}/getGameData`, {
    body: JSON.stringify({ gameId })
  });
  return { gameData, playerId, gameId };
};

export default GamePage;
