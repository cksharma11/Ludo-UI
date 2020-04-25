import React from 'react';
import JoinGame from '../components/JoinGame/JoinGame';
import GlobalStyles from '../components/globalStyles';
import PageLayout from '../components/PageLayout/PageLayout';

const joinGame = () => {
  return (
    <PageLayout>
      <JoinGame />
      <style jsx>{GlobalStyles}</style>
    </PageLayout>
  );
};

export default joinGame;
