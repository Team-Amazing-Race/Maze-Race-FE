import React from 'react';
import PropTypes from 'prop-types';

const PlayerCard = ({ name, symbol, color }) => {

  return (
    <>
      <p>{name}</p>
      <div style={{ backgroundColor: color }}>
        <span>{symbol}</span>
      </div>
    </>
  );

};

PlayerCard.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  symbol: PropTypes.string 
};

export default PlayerCard;
