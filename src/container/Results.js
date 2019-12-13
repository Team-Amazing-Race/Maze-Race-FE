import React from 'react';
import PropTypes from 'prop-types';
import ResultMessage from '../components/users/ResultMessage';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';

const Results = ({ history }) => {

  const { resetGame } = useGameEmitters();
  const eventState = useGameState();
 
  const handleReset = () => {
    resetGame(eventState.room.name);
    history.push('/');
  };
  
  
  return (
    <ResultMessage handleSubmit={handleReset} name={eventState.winner.name} winner={eventState.winner.userId} userId={eventState.userId} />
  );
};

Results.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Results;
