export const isRoom = (state) => {
  const room = state.inRoom;
  return state.rooms.some(door => {
    return door.name === room;
  });
};

