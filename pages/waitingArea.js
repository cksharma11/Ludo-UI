/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import regeneratorRuntime from 'regenerator-runtime';
import WaitingArea from '../components/WaitingArea/WaitingArea';
import { isWindow, parseCookie } from '../utils/utils';
import GlobalStyles from '../components/globalStyles';

const WaitingAreaPage = () => {
  if (isWindow()) {
    const { gameId } = parseCookie(document.cookie);
    return (
      <Fragment>
        <WaitingArea gameId={gameId} />
        <style jsx>{GlobalStyles}</style>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <WaitingArea gameId={1} />
      <style jsx>{GlobalStyles}</style>
    </Fragment>
  );
};

export default WaitingAreaPage;
