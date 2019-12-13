import React from 'react';
import PropTypes from 'prop-types';
import ResultMessage from '../components/users/ResultMessage';
import { useGameState } from '../socket';
import styles from '../components/styles/Results.css';

const Results = ({ match, history }) => {

  const eventState = useGameState();

  return (
    <div className={styles.Results}>
      <ResultMessage name={'Jose'} winner={true} />
    </div>
  );
};

Results.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Results;
