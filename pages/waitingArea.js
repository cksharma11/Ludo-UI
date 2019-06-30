/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import regeneratorRuntime from 'regenerator-runtime';
import WaitingArea from '../components/WaitingArea/WaitingArea';
import { isWindow, parseCookie } from '../utils/utils';

const WaitingAreaPage = () => {
  if (isWindow()) {
    const { gameId } = parseCookie(document.cookie);
    return <WaitingArea gameId={gameId} />;
  }
  return <WaitingArea gameId={1} />;
};

export default WaitingAreaPage;
