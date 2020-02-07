export const reducer = (state, { type, payload }) => {
  switch(type) {

    case 'ROOM_JOIN_DONE': {
      return { ...state, room: { ...state.room, players: payload.playersInRoom } };
    }
    case 'ROOM_CREATE_DONE': {
      return {
        ...state,
        room: payload
      };
    }
    case 'ROOM_JOIN_PRIVATE_DONE':
      return { ...state, userId: payload };

    case 'ENTER_NAME_DONE': {
      return { ...state, room: { ...state.room, runners: state.room.runners + 1, players: payload } };
    }
    case 'READY_DONE':
      return { ...state, ready: true, room: { ...state.room, cellMap: payload.maze, name: payload.room } };

    case 'MOVE_PLAYER_DONE': {
      return { ...state, room: { ...state.room, players: payload } };
    }
    case 'WINNER': {
      return { ...state, winner: payload };
    }
    case 'RESET_DONE': {
      return {
        ...state,
        ready: false,
        room: {
          players: [],
          runners: 0,
          seats: null,
          name: null,
          cellMap: null
        },
        userId: null,
        winner: null
      };
    }
    default:
      return state;
  }
};
