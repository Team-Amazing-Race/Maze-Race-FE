export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ROOM_JOIN_DONE': {
      if(state.rooms.some(room => {
        return room.name === payload;
      })) {
        const rooms = state.rooms.map(room => {
          if(room.name === payload) {
            return { ...room, players: room.players + 1 };
          } else {
            return room;
          }
        });
        return { ...state, rooms };
      }

      return { ...state, rooms: [...state.rooms, { name: payload, players: 1 }] };
    }
    case 'ROOM_DISCONNECT': {
      console.log('ROOM DISCONNECT');
      return state;
    }

    default:
      return state;
  }
};
