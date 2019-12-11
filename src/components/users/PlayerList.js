import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from './PlayerCard';
import styles from '../styles/PlayerList.css';

const PlayersList = ({ players }) => {
  const playerElements = players.map((player, i) => {
    return (
      <li key={i}>
        <PlayerCard {...player} />
      </li>
    );
  });

  return (
    <ul className={styles.PlayersList}>
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
