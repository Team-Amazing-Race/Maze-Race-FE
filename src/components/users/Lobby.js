import React from 'react';
import PropTypes from 'prop-types';

const Lobby = ({ name, players }) => {
  console.log(players);
  const playerString = players.reduce((acc, val) => {
    acc += val.name + ', ';
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
