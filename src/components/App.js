import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';
import { reducer } from '../reducers/reducer';
import JoinRoomForm from './users/JoinRoom';
import LobbyList from './users/LobbyList';
import EnterName from './users/EnterName';
import Player from './users/Player';




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
  };

  const handleName = (event, data) => {
    event.preventDefault();
    enterName({ name: data });
  };

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowUp') {
      console.log('playerMove', eventState);
      movePlayer({ dir: 'up', name: eventState.name });
    }
    if(e.key === 'ArrowDown') {
      movePlayer({ dir: 'down', name: eventState.name });
    }
    if(e.key === 'ArrowRight') {
      movePlayer({ dir: 'right', name: eventState.name });
    }
    if(e.key === 'ArrowLeft') {
      movePlayer({ dir: 'left', name: eventState.name });
    }
  };

  return (
    <>
      <EnterName handleName={handleName} />
      <p>make a room ya dingus</p>
      <Form handleSubmit={handleSubmit} />
      <LobbyList rooms={eventState.rooms} />
      <br />
      <Player handleKeyDown={handleKeyDown} color={'red'} top={'100px'} left={'100px'}/>
    </>
  );
}
