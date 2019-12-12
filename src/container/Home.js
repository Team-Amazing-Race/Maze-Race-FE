import React from 'react';
import PropTypes from 'prop-types';
import PlayersForm from '../components/users/PlayersForm';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';
import styles from '../components/styles/Home.css';

const shortId = require('shortid');

const Home = ({ history }) => {

  const { createRoom } = useGameEmitters();
  const eventState = useGameState();

  const handleRoomCreate = (event, number) => {
    event.preventDefault();
    const roomId = shortId.generate();
    Promise.resolve(

      createRoom({ room: roomId, number: number })
    )
      .then(() => {
        console.log(eventState);
        history.push(`/${roomId}`);
      }
      );
  };

  return (
    <div className={styles.Home}>
      <h1>Basic Ass Maze Game</h1>
      <h2>Enter Number of Players 1-8:</h2>
      <PlayersForm handleSubmit={handleRoomCreate} type="number" />
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;
