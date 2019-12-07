export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ROOM_JOIN_DONE': {
      const { room, name } = payload;
      const inRoom = () => {
        const foundRoom = state.rooms.find(openRoom => {
          return openRoom.name === room;
        });
        return foundRoom.players.some(player => {
          return player.name === name;
        });
      };
      if(state.rooms.some(currentRoom => {
        return currentRoom.name === room && !inRoom();
      })) {
        const rooms = state.rooms.map(currentRoom => {
          if(currentRoom.name === room) {
            return { ...currentRoom, players: [...state.currentRoom.players, { name: name }] };
          } else {
            return currentRoom;
          }
        });
        return { ...state, rooms };
      }

      return {
        ...state,
        rooms: [...state.rooms,
          {
            name: room,
            players: [
              { name: name }
            ]
          }
        ]
      };
    }
    case 'ROOM_DISCONNECT': {
      console.log('ROOM DISCONNECT');
      return state;
    }
    case 'ENTER_NAME_DONE':
      console.log('here we are');
      return { ...state, name: payload };
    default:
      return state;
  }
};
