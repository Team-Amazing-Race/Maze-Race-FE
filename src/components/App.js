import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';
import { reducer } from '../reducers/reducer';
import JoinRoomForm from './users/JoinRoom';
import LobbyList from './users/LobbyList';



export default function App() {

  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer, ['ROOM_JOIN_DONE']);

  //Actions to send to the backend
  const joinRoom = useEmitEvent('ROOM_JOIN', 'ROOM_DISCONNECT');

  const handleSubmit = (event, data) => {
    event.preventDefault();
    joinRoom({ room: data });
    console.log(eventState.rooms);
  };


  return (
    <>
      <p>make a room ya dingus</p>
      <Form handleSubmit={handleSubmit} />

      <LobbyList rooms={eventState.rooms} />

      <br />
      <p>join a room ya idjit</p>
      <JoinRoomForm handleJoin={handleSubmit} />

    </>
  );
}
