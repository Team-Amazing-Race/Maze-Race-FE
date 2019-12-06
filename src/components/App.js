import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';
import { reducer } from '../reducers/reducer';
import JoinRoomForm from './users/JoinRoom';



export default function App() {

  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer, ['ROOM_JOIN_DONE']);

  //Actions to send to the backend
  const joinRoom = useEmitEvent('ROOM_JOIN', 'ROOM_DISCONNECT');

  const handleSubmit = (event, data) => {
    event.preventDefault();
    joinRoom({ room: data });
  };

  const roomDisplay = eventState.rooms.map(room => {
    return (
      <li key={name}>
        <p>Name: {room.name}</p>
        <p>Players: {room.players}</p>
      </li>
    );
  });


  return (
    <>
      <p>make a room ya dingus</p>
      <Form handleSubmit={handleSubmit} />

      <ul>
        {roomDisplay}
      </ul>

      <br />
      <p>join a room ya idjit</p>
      <JoinRoomForm handleJoin={handleSubmit} />

    </>
  );
}
