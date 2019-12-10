import React from 'react';
import PropTypes from 'prop-types';

const ResultMessage = ({ handleSubmit, name, winner }) => {

  return (
    <>
      <h1>
        {name === winner ? 'You win!' : 'You Lost'}
      </h1>
      <button onClick={handleSubmit}>Play Again?</button>
    </>
  );
};

ResultMessage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  winner: PropTypes.string
};

export default ResultMessage;
