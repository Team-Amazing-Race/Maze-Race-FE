import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ResultsMessage.css';
import { Link } from 'react-router-dom';

const ResultMessage = ({ handleSubmit, name, winner }) => {

  return (
    <div  className={styles.ResultsMessage}>
      <h1>
        {name === winner ? 'You win!' : 'You Lost'}
      </h1>
      <button onClick={handleSubmit}>Play Again?</button>
      <Link to={'/about'}><h3>About the Developers</h3></Link>
    </div>
  );
};

ResultMessage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  winner: PropTypes.string
};

export default ResultMessage;
