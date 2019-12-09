import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ color }) => {

  return (
    <div style={{ backgroundColor: color, height: '10px', width: '10px' }}>
      <p>.</p>
    </div>
  );
};

Player.propTypes = {
  color: PropTypes.string.isRequired
};

export default Player;
