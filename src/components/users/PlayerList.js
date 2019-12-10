import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';

const PlayersList = ({ players }) => {
  const playerElements = players.map(player => {
    return (
      <li key={player.name + player.color + player.symbol}>
        <PlayerCard {...player} />
      </li>
    );
  });

  return (
    <ul>
      {playerElements}
    </ul>

  );
};

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    symbol: PropTypes.string 
  }))
};

export default PlayersList;
