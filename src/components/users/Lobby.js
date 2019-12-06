import React from 'react';
import PropTypes from 'prop-types';

const Lobby = ({ name, players }) => {

  return (
    <>
      <p>Name: {name}</p>
      <p>Players: {players}</p>
    </>
  );

};

Lobby.propTypes = {
  name: PropTypes.string,
  players: PropTypes.number
};

export default Lobby;
