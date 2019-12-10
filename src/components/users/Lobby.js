import React from 'react';
import PropTypes from 'prop-types';

const Lobby = ({ name, players }) => {
  const playerString = players.reduce((acc, val) => {
    acc += val.name + `${val.xPos},${val.yPos}` + '\n';
    return acc;
  }, '');
  return (
    <>
      <p>Name: {name}</p>
      <p>Players: {playerString}</p>
    </>
  );

};

Lobby.propTypes = {
  name: PropTypes.string,
  players: PropTypes.number
};

export default Lobby;
