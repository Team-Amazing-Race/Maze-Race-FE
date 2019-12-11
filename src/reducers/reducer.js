export const reducer = (state, { type, payload }) => {
  switch(type) {

    case 'SET_USER_ID_DONE':
      return { ...state, userId: payload };

    case 'ROOM_JOIN_DONE': {
      console.log('ROOM_JOIN_DONE');
      
      const rooms = state.rooms.map(room => {
        if(room.name === state.inRoom) {

          let playerAssigned = false;

          const players = room.players.map(player => {

            if(!playerAssigned && !player.userId) {
              console.log(payload);
              
              player.userId = payload.userId;
              playerAssigned = true;

              return player;

            } else {

              return player;

            }
          });

          return { ...room, runners: room.runners + 1, players };
        } else {
          return room;
        }
      });

      return { ...state, rooms: rooms };
    }

    case 'ROOM_CREATE_DONE': {
      console.log('ROOM CREATE DONE');
      
      const players = [];
      for(let i = 0; i < payload.number; i++) {
        players.push({ name: 'Waiting for player...', color: null, symbol: null, ready: false, xPos: 0, yPos: 0, userId: null });
      }

      return {
        ...state,
        rooms: [...state.rooms,
          {
            name: payload.room,
            seats: Number(payload.number),
            runners: 0,
            players
          }
        ]
      };
    }

    case 'ROOM_JOIN_PRIVATE_DONE':
      return { ...state, inRoom: payload };

    case 'ROOM_DISCONNECT': {
      console.log('ROOM DISCONNECT');
      return state;
    }
    case 'ENTER_NAME_DONE': {
      console.log('ENTER NAME DONE', payload);

      const rooms = state.rooms.map(room => {
        if(room.name === state.inRoom) {

          const players = room.players.map(player => {

            if(player.userId === state.userId) {
              player.name = payload.name;
              player.color = payload.color;
              player.symbol = payload.symbol;
              return player;

            } else {

              return player;
            }
          });

          return { ...room, players };
        }
        else {
          return room;
        }
      });

      return { ...state, rooms };
    }

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
