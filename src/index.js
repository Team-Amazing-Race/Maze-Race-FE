import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { SocketProvider } from './socket';

render(
  <SocketProvider>
    <App />
  </SocketProvider>,
  document.getElementById('root')
);
