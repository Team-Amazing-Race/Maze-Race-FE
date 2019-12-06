import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';
import { reducer } from '../reducers/reducer';
import JoinRoomForm from './users/JoinRoom';



export default function App() {

  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer, ['ROOM_CONNECT_DONE']);

  //Actions to send to the backend
  const startRoom = useEmitEvent('ROOM_CONNECT');
  const joinRoom = useEmitEvent('ROOM_CONNECT');

  const handleSubmit = (event, data) => {
    event.preventDefault();
    startRoom({ room: data });
  };

  const handleJoin = (event, data) => {
    event.preventDefault();
    joinRoom({ room: data });
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <span>{eventState.room}</span>
      <JoinRoomForm handleSubmit={handleJoin} />

    </>
  );
}
