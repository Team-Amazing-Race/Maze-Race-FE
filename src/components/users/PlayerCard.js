import React from 'react';
import PropTypes from 'prop-types';


const PlayerCard = ({ name, color, symbol, ready }) => {

  return (
    <>
      <p style={{ color: 'white' }}>{name}</p>
      <div style={{ backgroundColor: color }}>
        <span>{symbol}</span>
      </div>
      <p>{ready ? '✔' : '✗'}</p>
    </>
  );

};

PlayerCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  symbol: PropTypes.string,
  ready: PropTypes.bool
};

export default PlayerCard;
