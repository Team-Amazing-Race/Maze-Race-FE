import React from 'react';
import PropTypes from 'prop-types';
import ResultMessage from '../components/users/ResultMessage';
import { useGameState } from '../socket';

const Results = ({ match, history }) => {

  const eventState = useGameState();

  return (
    <ResultMessage name={'Jose'} winner={true} />
  );
};

Results.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Results;
