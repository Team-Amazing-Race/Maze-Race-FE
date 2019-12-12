import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { SocketProvider } from './socket';
import styles from '../src/components/styles/Index.css';
import { reducer } from './reducers/reducer';

render(
  <SocketProvider reducer={reducer} eventNames={
    ['ROOM_JOIN_DONE',
      'ENTER_NAME_DONE',
      'MOVE_PLAYER_DONE',
      'ROOM_JOIN_PRIVATE_DONE',
      'ROOM_CREATE_DONE',
      'SET_USER_ID_DONE',
      'READY_DONE']
  }>
    <App className={styles.index} />

  </SocketProvider>,
  document.getElementById('root')
);
