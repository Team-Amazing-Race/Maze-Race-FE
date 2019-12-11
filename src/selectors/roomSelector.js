export const inRoom = (state) => {
  const room = state.inRoom;
  const id = state.userId;

  const openRoom = state.rooms.find(door => {
    return door.name === room;
  });

  return openRoom.players.some(player => {
    return player.userId === id;
  });
};

export const getRunners = (state) => {
  const room = state.inRoom;
  const newRoom = state.rooms.find(door => {
    return door.name === room;
  });
  return (newRoom || {}).runners;
}
  ;

export const getPlayers = (state) => {
  console.log('Selector');
  
  const room = state.rooms.find(door => {
    return door.id === state.roomId;
  });
  return room.players || [];
};
