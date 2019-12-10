import React from 'react';
import Game from '../container/Game';
import PlayerSelection from '../components/users/PlayerSelection';


export default function App() {
  const color = ['red', 'green', 'blue', 'purple'];
  const symbols = ['√', '◊', 'Ó', ''];
  const handleSubmit = () => {
    console.log('a little sumpin sumpin');
  };

  return (
    <>
      <PlayerSelection handleSubmit={handleSubmit} colors={color} symbols={symbols} />
      {/* <Game /> */}
    </>

  );
}
