import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';
import { reducer } from '../reducers/reducer';
import JoinRoomForm from './users/JoinRoom';
import LobbyList from './users/LobbyList';
import EnterName from './users/EnterName';


export default function App() {

  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer, ['ROOM_JOIN_DONE', 'ENTER_NAME_DONE', 'MOVE_PLAYER_DONE']);

  //Actions to send to the backend
  const joinRoom = useEmitEvent('ROOM_JOIN');
  const enterName = useEmitEvent('ENTER_NAME');
  const movePlayer = useEmitEvent('MOVE_PLAYER');

  const handleSubmit = (event, data) => {
    event.preventDefault();
    joinRoom({ room: data, name: eventState.name });
    console.log(eventState);
  };

  const handleName = (event, data) => {
    event.preventDefault();
    enterName({ name: data });
  };

  const keyDownListener = (event) => {
    const keyName = event.key;
    if(keyName === 'ArrowUp') {
      movePlayer({ dir: 'up', name: eventState.name });
    }
    if(keyName === 'ArrowDown') {
      movePlayer({ dir: 'down', name: eventState.name });
    }
    if(keyName === 'ArrowRight') {
      movePlayer({ dir: 'right', name: eventState.name });
    }
    if(keyName === 'ArrowLeft') {
      movePlayer({ dir: 'left', name: eventState.name });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownListener);
    return () => {
      window.removeEventListener('keydown', keyDownListener);
    };
  });

  return (
    <div>
      <EnterName handleName={handleName} />
      <p>make a room ya dingus</p>
      <Form handleSubmit={handleSubmit} />
      <LobbyList rooms={eventState.rooms} />
      <br />
    </div>
  );
}
