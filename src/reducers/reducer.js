export const reducer = (state, { type, payload }) => {
  switch(type) {

    case 'SET_USER_ID_DONE':
      return { ...state, userId: payload };

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

    case 'ROOM_DISCONNECT': {
      return state;
    }
    case 'ENTER_NAME_DONE': {
      return { ...state, room: { ...state.room, runners: state.room.runners + 1, players: payload } };
    }
    case 'READY_DONE':
      return { ...state, ready: true, room: { ...state.room, cellMap: payload.maze, name: payload.room } };

    case 'MOVE_PLAYER_DONE': {
      return { ...state, room: { ...state.room, players: payload } };
    }
    default:
      return state;
  }
};
