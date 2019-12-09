export const getPlayer = state => {
  const player = state.player;
  const rooms = state.rooms;

  rooms.find(room => {
    return room.players.find(foundPlayer => {
      return foundPlayer === player;
    });
  });
}; 
