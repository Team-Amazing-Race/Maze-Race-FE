//RYANS KILLER SOCKET CODE COPYRIGHT RYAN 5EVER
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import io from 'socket.io-client';


// const socket = io.connect('http://192.168.1.136:7890'); //kam
// const socket = io.connect('http://192.168.1.213:7890'); //jose
const socket = io.connect('http://localhost:7890');

const SocketContext = createContext(socket);

// eslint-disable-next-line react/prop-types
export const SocketProvider = ({ children, reducer, eventNames }) => {

  const [state, dispatch] = useReducer(reducer, {
    ready: false,
    room: {
      players: [],
      runners: 0,
      seats: null,
      name: null
    },
    userId: null
  }
  );

  useEffect(() => {
    eventNames.forEach(eventName => {
      socket.on(eventName, payload => dispatch({
        type: eventName,
        payload
      }));
    });
  }, []);

  return (
    <SocketContext.Provider value={{ socket, state }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const { socket } = useContext(SocketContext);
  return socket;
};

export const useGameState = () => {
  const { state } = useContext(SocketContext);
  return state;
};

export const useEmitEvent = eventName => {
  const socket = useSocket();
  return data => {
    socket.emit(eventName, data);
  };
};

// export const useOnEvent = (reducer, eventNames) => {
//   const socket = useSocket();
//   const [state, dispatch] = useReducer(reducer, { rooms: [], userId: null });

//   useEffect(() => {
//     eventNames.forEach(eventName => {
//       socket.on(eventName, payload => dispatch({
//         type: eventName,
//         payload
//       }));
//     });
//   }, []);

// return state;
// };
