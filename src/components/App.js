import React, { useState, useEffect } from 'react';
import { useSocket, useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';


const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'NAME_SUBMIT_DONE':
      return { ...state, ...payload };
    case 'ROOM_CONNECT_DONE':
      console.log('connected to', payload);
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default function App() {

  // useEmitEvents are triggered by game actions and sent to BE
  // const nameSocket = useEmitEvent('NAME_SUBMIT');
  const openDoor = useEmitEvent('ROOM_CONNECT');

  // BE emits stuff based on useEmitEvents

  // UseOnEvent listens to BE emiter
  // eventState is state
  // const eventState = useOnEvent(reducer, ['NAME_SUBMIT_DONE']);
  const eventState = useOnEvent(reducer, ['ROOM_CONNECT_DONE']);



  // const handleSubmit = (event, data) => {
  //   event.preventDefault();
  //   nameSocket({ name: data });
  // };

  const connectToRoom = (event) => {
    event.preventDefault();
    openDoor({ room: 'room1' });
    console.log(eventState);
  };

  return (
    <>
      <Form handleSubmit={connectToRoom} />
      <span>{eventState.room}</span>

    </>
  );
}
