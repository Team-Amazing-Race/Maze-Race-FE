import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import { reducer } from '../reducers/reducer';
import P5Wrapper from 'react-p5-wrapper';
import PlayersForm from '../components/users/PlayersForm';
import PlayerSelection from '../components/users/PlayerSelection';
import PlayersList from '../components/users/PlayerList';
import ResultMessage from '../components/users/ResultMessage';
import Modal from '../components/Modal';
import sketch from '../components/sketch/Sketch';
import PropTypes from 'prop-types';
import { inRoom, getRunners, getPlayers } from '../selectors/roomSelector';

const shortId = require('shortid');

//variables
let children;
const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const symbols = ['Q', 'Z', 'W', 'P', 'K', 'M', 'B', 'S'];



const Game = ({ match, history }) => {

  // State
  const [isOpen, setIsOpen] = useState(true);
  const [winner, setWinner] = useState(null);


  //Keypress logic

  const keyDownListener = (event) => {
    const keyName = event.key;
    if(keyName === 'ArrowUp') {
      movePlayer({ dir: 'up', name: eventState.name, room: eventState.inRoom });
    }
    if(keyName === 'ArrowDown') {
      movePlayer({ dir: 'down', name: eventState.name, room: eventState.inRoom });
    }
    if(keyName === 'ArrowRight') {
      movePlayer({ dir: 'right', name: eventState.name, room: eventState.inRoom });
    }
    if(keyName === 'ArrowLeft') {
      movePlayer({ dir: 'left', name: eventState.name, room: eventState.inRoom });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownListener);
    return () => {
      window.removeEventListener('keydown', keyDownListener);
    };
  });


  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer,
    ['ROOM_JOIN_DONE',
      'ENTER_NAME_DONE',
      'MOVE_PLAYER_DONE',
      'ROOM_JOIN_PRIVATE_DONE',
      'ROOM_CREATE_DONE',
      'SET_USER_ID_DONE']);

  //Actions to send to the backend
  const createRoom = useEmitEvent('ROOM_CREATE');
  const enterName = useEmitEvent('ENTER_NAME');
  const movePlayer = useEmitEvent('MOVE_PLAYER');
  const joinRoom = useEmitEvent('ROOM_JOIN');
  const setUserId = useEmitEvent('SET_USER_ID');
  const joinRoomPrivate = useEmitEvent('ROOM_JOIN_PRIVATE');

  //set user ID

  if(!eventState.userId) {
    const id = shortId.generate();
    setUserId(id);
  }

  if(!eventState.inRoom && match.params.roomId) {
    console.log('join room!!!!!!');
    joinRoomPrivate(match.params.roomId);
    return null;
  }
  //Handlers

  const handleRoomCreate = (event, number) => {
    event.preventDefault();
    const roomId = shortId.generate();
    createRoom({ room: roomId, number: number, userId: eventState.userId });
    history.push(`/${roomId}`);
  };

  const handleName = (event, data) => {
    console.log(data);
    event.preventDefault();
    enterName({ name: data });
  };


  //Modal display logic

  // console.log('isOpen', isOpen);
  // console.log('roomId', match.params.roomId);
  // console.log('winner', winner);
  // console.log(eventState);


  // Home Screen

  if(isOpen && !match.params.roomId) {
    children = (
      <>
        <h1>Logo!</h1>
        <PlayersForm handleSubmit={handleRoomCreate} type="number" />
      </>
    );
  }

  // Check if in room

  else if(isOpen && !winner && inRoom(eventState)) {
    children = (
      <>
        <PlayersForm handleSubmit={handleName} type="text" />
        <PlayersList players={getPlayers(eventState)} />
      </>
    );
  }

  // if not in room, join room

  else {
    console.log('ROOM JOIN');
    joinRoom(eventState);
  }

  //Results screen
  if(winner && isOpen) {
    children = <ResultMessage winner={winner} handleSubmit={handleReset} />;
  }





  return (
    <>
      <Modal>
        {children}
      </Modal>
      {eventState.inRoom && eventState.name && <P5Wrapper sketch={sketch} rooms={eventState.rooms} currentRoom={eventState.inRoom} currentPlayer={eventState.name} />}
    </>
  );
};

Game.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Game;
