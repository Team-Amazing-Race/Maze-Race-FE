import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PlayerSelection from '../components/users/PlayerSelection';
import PlayerList from '../components/users/PlayerList';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';

const shortId = require('shortid');


const Lobby = ({ match, history }) => {

  const { enterName, joinRoom, setReady } = useGameEmitters();
  const eventState = useGameState();

  useEffect(() => {
    const userId = shortId.generate();
    joinRoom({ ...eventState, userId, inRoom: match.params.roomId });
  }, []);

  const handleName = (event, name, color, symbol) => {
    event.preventDefault();

    enterName({ name: name, color: color, symbol: symbol, userId: eventState.userId });
  };

  const colors = ['#FF0000', '#FE8300', '#FFF800', '#4AF441', '#56F0F9', '#0086FF', '#5E28FF', '#FF00F9'];
  const symbols = ['@', 'Δ', 'Ø', 'λ', 'π', 'µ', 'ß', 'Σ'];

  useEffect(() => {

    if(eventState.room.runners && eventState.room.seats && eventState.room.runners === eventState.room.seats) {
      setReady();
    }
  }, [eventState.room.runners]);

  useEffect(() => {
    if(eventState.ready) {
      history.push(`/${match.params.roomId}/game`);
    }
  }, [eventState.ready]);


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
