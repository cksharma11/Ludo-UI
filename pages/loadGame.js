import React from 'react';
import LoadGame from '../components/LoadGame/LoadGame';
import GlobalStyles from '../components/globalStyles';
import PageLayout from '../components/PageLayout/PageLayout';

const loadGame = () => {
  return (
    <PageLayout>
      <LoadGame />
      <style jsx>{GlobalStyles}</style>
    </PageLayout>
  );
};

export default loadGame;
