import React from "react";
import PropType from "prop-types";
import Header from "../Header/Header";

const Home = ({ title, createGameLink, joinGameLink }) => {
  return (
    <div>
      <Header title={title} />
      <a href={createGameLink}>Create Game</a>
      <a href={joinGameLink}>Join Game</a>
    </div>
  );
};

export default Home;
