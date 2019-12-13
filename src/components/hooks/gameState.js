import { useEmitEvent } from '../../socket';

export default function useGameEmitters() {

  const createRoom = useEmitEvent('ROOM_CREATE');
  const enterName = useEmitEvent('ENTER_NAME');
  const movePlayer = useEmitEvent('MOVE_PLAYER');
  const joinRoom = useEmitEvent('ROOM_JOIN');
  const joinRoomPrivate = useEmitEvent('ROOM_JOIN_PRIVATE');
  const setReady = useEmitEvent('READY');
  const resetGame = useEmitEvent('RESET');

  return { createRoom, enterName, movePlayer, joinRoom, joinRoomPrivate, setReady, resetGame };

}

