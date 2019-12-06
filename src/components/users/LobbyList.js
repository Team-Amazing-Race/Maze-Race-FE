import React from 'react';
import PropTypes from 'prop-types';

const LobbyList = ({ rooms }) => {
  const roomDisplay = rooms.map(room => {
    return (
      <li key={name}>
        <p>Name: {room.name}</p>
        <p>Players: {room.players}</p>
      </li>
    );
  });

  return (
    <ul>
      {roomDisplay}
    </ul>
  );
};

LobbyList.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    players: PropTypes.number
  }))
};

export default LobbyList;
