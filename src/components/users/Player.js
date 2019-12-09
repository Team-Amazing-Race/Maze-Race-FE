import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ color, left, top, handleKeyDown }) => {
  return (
    <div tabIndex='0' onKeyDown={handleKeyDown} style={{ backgroundColor: color, height: '10px', width: '10px', position: 'absolute', left: left, top: top }}>
    </div>
  );
};

Player.propTypes = {
  color: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  top: PropTypes.string.isRequired,
  handleKeyDown: PropTypes.func.isRequired
};

export default Player;
