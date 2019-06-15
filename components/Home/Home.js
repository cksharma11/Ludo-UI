import React from 'react';
import PropType from 'prop-types';
import Header from '../Header/Header';
import HomeStyles from './Home.style';

const Home = ({ title, createGameLink, joinGameLink }) => {
  return (
    <div className="main-container">
      <Header title={title} />
      <div className="options">
        <a href={createGameLink}>Create Game</a>
        <a href={joinGameLink}>Join Game</a>
      </div>
      <style jsx>{HomeStyles}</style>
    </div>
  );
};

Home.propTypes = {
  title: PropType.string.isRequired,
  createGameLink: PropType.string.isRequired,
  joinGameLink: PropType.string.isRequired
};

export default Home;
