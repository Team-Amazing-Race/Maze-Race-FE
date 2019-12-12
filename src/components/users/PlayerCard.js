import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerCard.css';


const PlayerCard = ({ name, color, symbol, ready }) => {

  return (
    <div className={styles.PlayerCard}>
      <p>{name}</p>
      <div style={{ backgroundColor: color }}>
        <span>{symbol}</span>
      </div>
      <p>{ready ? '✅' : '❌'}</p>
    </div>
  );

};

PlayerCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  symbol: PropTypes.string,
  ready: PropTypes.bool
};

export default PlayerCard;
