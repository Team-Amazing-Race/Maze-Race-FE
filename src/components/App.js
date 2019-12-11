import React from 'react';
import Game from '../container/Game';
import PlayerSelection from '../components/users/PlayerSelection';
import About from './users/About';
import aboutProps from '../components/users/AboutProps.json';


export default function App() {
  const color = ['red', 'green', 'blue', 'purple'];
  const symbols = ['√', '◊', 'Ó', ''];
  const handleSubmit = () => {
    console.log('a little sumpin sumpin');
  };

  return (
    <>
      {/* <PlayerSelection handleSubmit={handleSubmit} colors={color} symbols={symbols} /> */}
      {/* <Game /> */}
      <About name={aboutProps.name} img={aboutProps.img} desc={aboutProps.desc} />
    </>

  );
}
