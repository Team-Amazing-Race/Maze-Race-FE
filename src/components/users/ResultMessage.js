import React from 'react';
import PropTypes from 'prop-types';

const ResultMessage = ({ handleSubmit, name, winner, userId }) => {

  

  return (
    <>
      <h1>
        {userId === winner ? 'You win!' : `${name} won! Get good scrub.`}
      </h1>
      <button onClick={() => handleSubmit()}>Play Again?</button>
      <link></link>
    </>
  );
};

ResultMessage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  winner: PropTypes.string,
  userId: PropTypes.string
};

export default ResultMessage;
