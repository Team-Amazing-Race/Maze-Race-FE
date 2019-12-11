import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { SocketProvider } from './socket';
//import '../src/components/styles/reset.css';
import styles from '../src/components/styles/Index.css';


render(
  <SocketProvider>
    <App className={styles.index}/>
  </SocketProvider>,
  document.getElementById('root')
);
