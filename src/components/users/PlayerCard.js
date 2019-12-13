import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/PlayerCard.css';
import check from '../../assets/img/check.png';
import x from '../../assets/img/x.png';

const PlayerCard = ({ name, color, symbol, ready }) => {
  console.log('TEST LOG****', ready);
  
  let finalReady = ready ? `${styles.PlayerReady} ${styles.PlayerReadyFinal}` : styles.PlayerReady;
  let finalCheck = ready ? `${styles.NotReady} ${styles.Ready}` : styles.NotReady;

  return (
    <div className={styles.PlayerCard}>
      <p>{name}</p>
      <div className={styles.PlayerSymbols}>
        <div className={finalReady} style={{ backgroundColor: color }}>
          <div>{symbol}</div>
        </div>
        <img className={finalCheck} src={ready ? check : x}></img>
      </div>
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
