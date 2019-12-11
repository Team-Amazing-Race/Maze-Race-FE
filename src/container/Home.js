import React from 'react';
import PropTypes from 'prop-types';
import PlayersForm from '../components/users/PlayersForm';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';
import styles from '../components/styles/Game.css';

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
      <h1>Basic Ass Maze Game</h1>
      <h2>Enter Number of Players 1-8:</h2>
      <PlayersForm className={styles.input} handleSubmit={handleRoomCreate} type="number" />
    </>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;
