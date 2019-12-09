import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { SocketProvider } from './socket';

window.onkeydown = playerMove;

const playerMove = (e) => {
  if(e.key === 'ArrowUp') {
    console.log('playerMove');
    // movePlayer({ dir: 'up', name: eventState.name });
  }
  if(e.key === 'ArrowDown') {
    // movePlayer({ dir: 'down', name: eventState.name });
  }
  if(e.key === 'ArrowRight') {
    // movePlayer({ dir: 'right', name: eventState.name });
  }
  if(e.key === 'ArrowLeft') {
    // movePlayer({ dir: 'left', name: eventState.name });
  }
};

render(
  <SocketProvider>
    <App />
  </SocketProvider>,
  document.getElementById('root')
);
