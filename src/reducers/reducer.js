export const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'NAME_SUBMIT_DONE':
      return { ...state, ...payload };
    case 'ROOM_CONNECT_DONE':
      console.log('entered room', payload);
      return { ...state, room: payload };
    default:
      return state;
  }
};
