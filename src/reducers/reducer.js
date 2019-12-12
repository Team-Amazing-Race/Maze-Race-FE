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
      return { ...state, ready: true, room: { ...state.room, cellMap: payload } };

    case 'MOVE_PLAYER_DONE': {
      const inRoom = payload.room;
      const playerToMove = payload.name;
      const rooms = state.rooms;

      const room = rooms.find(room => {
        return room.name === inRoom;
      });

      const player = room.players.find(person => {
        return person.name === playerToMove;
      });

      const newX = () => {
        if(payload.dir === 'right') {
          return player.xPos + 1;
        }
        if(payload.dir === 'left') {
          return player.xPos - 1;
        }
        return player.xPos;
      };

      const newY = () => {
        if(payload.dir === 'up') {
          return player.yPos + 1;
        }
        if(payload.dir === 'down') {
          return player.yPos - 1;
        }
        return player.yPos;
      };

      const newRooms = state.rooms.map(openRoom => {
        if(openRoom.name === inRoom) {
          const newPlayers = openRoom.players.map(person => {
            if(person.name === player.name) {
              return { ...person, xPos: newX(), yPos: newY() };
            } else {
              return person;
            }
          });
          return { ...openRoom, players: newPlayers };
        }
        return openRoom;
      });

      return { ...state, rooms: newRooms };
    }
    default:
      return state;
  }
};
