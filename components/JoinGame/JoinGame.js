import React from "react";
import PropTypes from "prop-types";

const JoinGame = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="name" />
      <input type="number" name="gameId" placeholder="gameId" />
      <input type="submit" />
    </form>
  );
};

export default JoinGame;
