import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { SocketProvider } from './socket';
import '../src/components/styles/reset.css';
import '../src/components/styles/Index.css';
import { reducer } from './reducers/reducer';
import styles from './components/styles/Index.css';
render(
  <SocketProvider reducer={reducer} eventNames={
    ['ROOM_JOIN_DONE',
      'ENTER_NAME_DONE',
      'MOVE_PLAYER_DONE',
      'ROOM_JOIN_PRIVATE_DONE',
      'ROOM_CREATE_DONE',
      'READY_DONE',
      'WINNER',
      'RESET_DONE']
  }>
    <App className={styles.index} />

  </SocketProvider>,
  document.getElementById('root')
);
