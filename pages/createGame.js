import React from 'react';
import CreateGame from '../components/CreateGame/CreateGame';
import GlobalStyles from '../components/globalStyles';
import PageLayout from '../components/PageLayout/PageLayout';

const createGame = () => {
  return (
    <PageLayout>
      <CreateGame />
      <style jsx>{GlobalStyles}</style>
    </PageLayout>
  );
};

export default createGame;
