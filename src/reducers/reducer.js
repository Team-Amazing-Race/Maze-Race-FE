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
            return { ...currentRoom, players: [...currentRoom.players, { name: name, xPos: 0, yPos: 0 }] };
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
              {
                name: name,
                xPos: 0,
                yPos: 0,
              }
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
      return { ...state, name: payload };

    case 'MOVE_PLAYER_DONE': {
      const playerToMove = state.name;
      const rooms = state.rooms;

      const room = rooms.find(room => {
        return room.players.some(foundPlayer => {
          return foundPlayer.name === playerToMove;
        }) === true;
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
        if(openRoom.players.some(person => {
          return person.name === player.name;
        })) {
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
