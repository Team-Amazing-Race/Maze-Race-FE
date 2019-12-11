import { useEmitEvent } from '../../socket';

export default function useGameEmitters() {

  const createRoom = useEmitEvent('ROOM_CREATE');
  const enterName = useEmitEvent('ENTER_NAME');
  const movePlayer = useEmitEvent('MOVE_PLAYER');
  const joinRoom = useEmitEvent('ROOM_JOIN');
  const setUserId = useEmitEvent('SET_USER_ID');
  const joinRoomPrivate = useEmitEvent('ROOM_JOIN_PRIVATE');

  return { createRoom, enterName, movePlayer, joinRoom, setUserId, joinRoomPrivate };

}

