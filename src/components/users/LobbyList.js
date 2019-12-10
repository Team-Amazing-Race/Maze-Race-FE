import React from 'react';
import PropTypes from 'prop-types';
import Lobby from './Lobby';

const LobbyList = ({ rooms }) => {
  const roomDisplay = rooms.map(room => {
    return (
      <li key={room.name}>
        <Lobby name={room.name} players={room.players} />
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
