import React, { useState, useEffect } from 'react';
import { useSocket, useEmitEvent, useOnEvent } from '../socket';


const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'TESTED':
      console.log(payload);
      return state;
    default:
      return state;
  }
};

export default function App() {

  // useEmitEvents are triggered by game actions and sent to BE
  const testSocket = useEmitEvent('TEST');

  // BE emits stuff based on useEmitEvents

  // UseOnEvent listens to BE emiter
  // eventState is state
  const eventState = useOnEvent(reducer, ['TESTED']);

  const handleClick = (data) => {
    testSocket(data);
  };
  return (
    <>
      <h1>whatever</h1>
      <button onClick={() => { handleClick('hello'); }}>CLICKY</button>
    </>
  );
}
