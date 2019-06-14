import React from "react";
import PropTypes from "prop-types";

const CreateGame = () => {
  return (
    <form>
      <input type="text" name="hostname" placeholder="hostname" />
      <input
        type="number"
        name="numberOfPlayers"
        placeholder="number of players"
      />
      <input type="submit" />
    </form>
  );
};

export default CreateGame;
