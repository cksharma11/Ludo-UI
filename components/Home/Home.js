import React from 'react';
import PropType from 'prop-types';
import Header from '../Header/Header';
import HomeStyles from './Home.style';
import labels from '../../config/labels/labels';
import globalStyles from '../GlobalStyle';

const Home = ({ title, createGameLink, joinGameLink, loadGameLink }) => {
  return (
    <div className="main-container">
      <Header title={title} />
      <div className="options">
        <a href={createGameLink}>{labels.CREATE_GAME}</a>
        <a href={joinGameLink}>{labels.JOIN_GAME}</a>
        <a href={loadGameLink}>{labels.LOAD_GAME}</a>
      </div>
      <style jsx>{HomeStyles}</style>
      <style jsx>{globalStyles}</style>
    </div>
  );
};

Home.propTypes = {
  title: PropType.string.isRequired,
  createGameLink: PropType.string.isRequired,
  joinGameLink: PropType.string.isRequired,
  loadGameLink: PropType.string.isRequired
};

export default Home;
