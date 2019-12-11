import React from 'react';
import PropTypes from 'prop-types';
import PlayersForm from '../components/users/PlayersForm';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';

const shortId = require('shortid');

const Home = ({ history }) => {

  const { createRoom } = useGameEmitters();
  const eventState = useGameState();
  
  const handleRoomCreate = (event, number) => {
    event.preventDefault();
    const roomId = shortId.generate();
  
    createRoom({ room: roomId, number: number, userId: eventState.userId });
    history.push(`/${roomId}`);
  };

  return (
    <>
      <h1>Logo!</h1>
      <PlayersForm handleSubmit={handleRoomCreate} type="number" />
    </>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;
