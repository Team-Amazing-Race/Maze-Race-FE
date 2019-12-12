import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlayerSelection from '../components/users/PlayerSelection';
import PlayerList from '../components/users/PlayerList';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';

const shortId = require('shortid');

const Lobby = ({ match, history }) => {

  const { setUserId, joinRoomPrivate, enterName, joinRoom } = useGameEmitters();
  const eventState = useGameState();
  // const [playerList, setPlayerList] = useState(null);

  useEffect(() => {
    const userId = shortId.generate();
    setUserId(userId);
    joinRoomPrivate(match.params.roomId);
    joinRoom({ ...eventState, userId, inRoom: match.params.roomId });
  }, []);

  // useEffect(() => {
  //   if(eventState.inRoom && eventState.userId) {
  //     console.log('MAKING PLAYERLIST FROM THE FOLLOWING STATE', eventState);

  //     });
  //     setPlayerList(room.players || []);
  //     console.log('SET PLAYER LIST DONE');

  //   }
  // }, [eventState.rooms, eventState.inRoom, eventState.userId]);


  const handleName = (event, name, color, symbol) => {
    event.preventDefault();
    console.log('HANDLENAME', name, color, symbol);

    enterName({ name: name, color: color, symbol: symbol, state: eventState });
  };

  const colors = ['#FF0000', '#FE8300', '#FFF800', '#4AF441', '#56F0F9', '#0086FF', '#5E28FF', '#FF00F9'];
  const symbols = ['@', 'Δ', 'Ø', 'λ', 'π', 'µ', 'ß', 'Σ'];

  return (
    <>
      <PlayerSelection handleSubmit={handleName} colors={colors} symbols={symbols} />
      {eventState.room && <PlayerList players={eventState.room.players} />}
    </>
  );
};

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
