/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import regeneratorRuntime from 'regenerator-runtime';
import WaitingArea from '../components/WaitingArea/WaitingArea';
import { isWindow, parseCookie } from '../utils/utils';
import GlobalStyles from '../components/globalStyles';
import PageLayout from '../components/PageLayout/PageLayout';

const WaitingAreaPage = () => {
  if (isWindow()) {
    const { gameId } = parseCookie(document.cookie);
    return (
      <PageLayout>
        <WaitingArea gameId={gameId} />
        <style jsx>{GlobalStyles}</style>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <WaitingArea gameId={1} />
      <style jsx>{GlobalStyles}</style>
    </PageLayout>
  );
};

export default WaitingAreaPage;
