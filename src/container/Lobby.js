import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlayerSelection from '../components/users/PlayerSelection';
import PlayerList from '../components/users/PlayerList';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';

const shortId = require('shortid');

let readyCounter = 0;

const Lobby = ({ match, history }) => {

  const { setUserId, joinRoomPrivate, enterName, joinRoom } = useGameEmitters();
  const eventState = useGameState();
  const [playerList, setPlayerList] = useState(null);
  const [seats, setSeats] = useState(null);
  const [gameStart, setGameStart] = useState(false);



  console.log(readyCounter, 'READY COUNTER');
  
  useEffect(() => {
    let inRoom = null;
    if(playerList){

      inRoom = playerList.some(player => {
        return player.userId === eventState.userId; 
      });
    }

    if(!inRoom){
      const userId = shortId.generate();
      setUserId(userId),
      joinRoomPrivate(match.params.roomId),
      joinRoom({ ...eventState, userId });
    
    }

  }, []);

  useEffect(() => {
    if(eventState.rooms.length > 0 && eventState.inRoom && eventState.userId) {
      const room = eventState.rooms.find(door => {
        return door.name === eventState.inRoom;
      });
      setPlayerList(room.players || []);
      setSeats(room.seats);
    }
    
    if(gameStart){
      history.push(`/${eventState.inRoom}/game`);
    }
  }, [eventState.rooms, eventState.inRoom, eventState.userId, gameStart]);


  const handleName = (event, name, color, symbol, ready) => {
    event.preventDefault();
    
    readyCounter++;
    console.log(readyCounter);
    enterName({ name: name, color: color, symbol: symbol, ready: ready, state: eventState });
    if(readyCounter === seats){
      setGameStart(true);
    }
  };

  const colors = ['#FF0000', '#FE8300', '#FFF800', '#4AF441', '#56F0F9', '#0086FF', '#5E28FF', '#FF00F9'];
  const symbols = ['@', 'Δ', 'Ø', 'λ', 'π', 'µ', 'ß', 'Σ'];
  return (
    <>
      <PlayerSelection handleSubmit={handleName} colors={colors} symbols={symbols} />
      {playerList && <PlayerList players={playerList} />}
    </>
  );
};

Lobby.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Lobby;
