export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ROOM_JOIN_DONE': {

      const room = state.rooms.findIndex(room => {
        return room.name === payload;
      });

      if(room) {
        state.rooms[room].players++;
      }

      return state;
    }
    case 'ROOM_CREATE_DONE': {

      const rooms = state.rooms;

      if(!rooms.find(room => {
        return room.name === payload;
      })) {

        rooms.push({ name: payload, players: 1 });
        console.log('entered room', payload);
        return { ...state, rooms: rooms };
      }
      return state;
    }
    default:
      return state;
  }
};
