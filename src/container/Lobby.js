import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PlayersForm from '../components/users/PlayersForm';
import PlayersList from '../components/users/PlayersList';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';

const Lobby = ({ match, history }) => {

  const { setUserId, joinRoomPrivate, enterName, joinRoom } = useGameEmitters();
  const eventState = useGameState();


  return (
    <>
      <PlayersForm handleSubmit={handleName} type="text" />
      <PlayersList players={getPlayers(eventState)} />
    </>
  );
}

Lobby.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Lobby;

// if (!eventState.userId) {
//     const id = shortId.generate();
//     setUserId(id);
//     return null;
// }

// if (!eventState.inRoom && match.params.roomId) {
//     console.log('join room!!!!!!');
//     joinRoomPrivate(match.params.roomId);
//     return null;
// }

// const handleName = (event, data) => {
//     event.preventDefault();
//     enterName({ name: data });
// };


//   else if (isOpen && !winner && inRoom(eventState)) {
//     children = (
//         <>
//             <PlayersForm handleSubmit={handleName} type="text" />
//             <PlayersList players={getPlayers(eventState)} />
//         </>
//     );
// }

// // if not in room, join room

// else {
//     console.log('ROOM JOIN');
//     joinRoom(eventState);
// }

// const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const symbols = ['Q', 'Z', 'W', 'P', 'K', 'M', 'B', 'S'];