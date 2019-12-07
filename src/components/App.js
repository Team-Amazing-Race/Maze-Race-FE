import React, { useState, useEffect } from 'react';
import { useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';
import { reducer } from '../reducers/reducer';
import JoinRoomForm from './users/JoinRoom';
import LobbyList from './users/LobbyList';
import EnterName from './users/EnterName';



export default function App() {

  //Listen for events from the backend that will hit the reducer
  const eventState = useOnEvent(reducer, ['ROOM_JOIN_DONE', 'ENTER_NAME_DONE']);

  //Actions to send to the backend
  const joinRoom = useEmitEvent('ROOM_JOIN');
  const enterName = useEmitEvent('ENTER_NAME');

  const handleSubmit = (event, data) => {
    event.preventDefault();
    joinRoom({ room: data, name: eventState.name });
    console.log(eventState.rooms);
  };

  const handleName = (event, data) => {
    event.preventDefault();
    enterName({ name: data });
    console.log(eventState);
  };


  return (
    <>
      <EnterName handleName={handleName} />
      <span>Your name is {eventState.name}</span>
      <p>make a room ya dingus</p>
      <Form handleSubmit={handleSubmit} />
      <LobbyList rooms={eventState.rooms} />

      <br />
      <p>join a room ya idjit</p>
      <JoinRoomForm handleJoin={handleSubmit} />

    </>
  );
}
