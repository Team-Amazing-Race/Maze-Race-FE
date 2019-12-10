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

const Game = () => {
  // State
  const [players, setPlayers] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [winner, setWinner] = useState(null);


  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer,
    ['ROOM_JOIN_DONE',
      'ENTER_NAME_DONE',
      'MOVE_PLAYER_DONE',
      'ROOM_JOIN_PRIVATE']);

  //Actions to send to the backend
  const joinRoom = useEmitEvent('ROOM_JOIN');
  const enterName = useEmitEvent('ENTER_NAME');
  const movePlayer = useEmitEvent('MOVE_PLAYER');

  //Handlers

  const handleSubmit = (event, data) => {
    event.preventDefault();
    joinRoom({ room: data, name: eventState.name });
  };

  const handleName = (event, data) => {
    event.preventDefault();
    enterName({ name: data });

  };

  const handleNewGame = (event, number) => {
    event.preventDefault();
    setPlayers(number);
  };

  const handleReset = () => {

  };

  const handlePlayerSelect = (event, data) => {
    event.preventDefault();
    // setPlayers(data);
  };


  //variables
  let children;
  const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const symbols = ['Q', 'Z', 'W', 'P', 'K', 'M', 'B', 'S'];


  //Modal display logic

  // Home Screen
  if(!players && isOpen) {
    children = (
      <>
        <h1>Logo!</h1>
        <PlayersForm handleSubmit={handleNewGame} type="number" />
      </>
    );
  }

  //Lobby
  if(players && isOpen && !winner) {
    children = (
      <>
        <PlayersForm handleSubmit={handleName} type="text" />
        <PlayersForm handleSubmit={handleSubmit} type="text" />
        <PlayersList players={[{ name: 'poop', color: 'brown', symbol: '$' }]} />
      </>
    );
  }

  //Results screen
  if(winner && isOpen) {
    children = <ResultMessage winner={winner} handleSubmit={handleReset} />;
  }


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


  return (
    <>
      <Modal>
        {children}
      </Modal>
      {eventState.inRoom && eventState.name && <P5Wrapper sketch={sketch} rooms={eventState.rooms} currentRoom={eventState.inRoom} currentPlayer={eventState.name} />}
    </>
  );
};


export default Game;
