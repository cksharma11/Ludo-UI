import React from 'react';
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
