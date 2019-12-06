export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ROOM_JOIN_DONE': {

      const room = state.rooms.findIndex(room => {
        return room.name === payload;
      });

      if(state.rooms[room]) {

        state.rooms[room].players++;
        console.log('entered room', payload);

      } else {

        state.rooms.push({ name: payload, players: 1 });
        console.log('created room', payload);

      }

      return state;
    }
    case 'ROOM_DISCONNECT': {
      console.log('ROOM DISCONNECT');
      return state;
    }

    default:
      return state;
  }
};
