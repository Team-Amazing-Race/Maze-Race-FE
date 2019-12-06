import React, { useState, useEffect } from 'react';
import { useSocket, useEmitEvent, useOnEvent } from '../socket';
import Form from './users/Form';


const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'NAME_SUBMIT_DONE':
      console.log(state);
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default function App() {

  // useEmitEvents are triggered by game actions and sent to BE
  const nameSocket = useEmitEvent('NAME_SUBMIT');

  // BE emits stuff based on useEmitEvents

  // UseOnEvent listens to BE emiter
  // eventState is state
  const eventState = useOnEvent(reducer, ['NAME_SUBMIT_DONE']);



  const handleSubmit = (event, data) => {
    event.preventDefault();
    nameSocket({ name: data });
  };

  return (
    <>
      <Form handleSubmit={handleSubmit} />
      <span>{eventState.name}</span>

    </>
  );
}
