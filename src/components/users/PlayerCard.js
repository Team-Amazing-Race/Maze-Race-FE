import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerCard.css';


const PlayerCard = ({ name, color, symbol, ready }) => {

  return (
    <div className={styles.PlayerCard}>
      <p>{name}</p>
      <div data-status={{ ready }} className={styles.PlayerReady} style={{ backgroundColor: color }}>
        <div>{symbol}</div>
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
