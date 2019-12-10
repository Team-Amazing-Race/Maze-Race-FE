import React, { useState } from 'react';
import PlayersForm from '../components/users/PlayersForm';
import PlayerSelection from '../components/users/PlayerSelection';
import PlayersList from '../components/users/PlayerList';
import ResultMessage from '../components/users/ResultMessage';
import Modal from '../components/Modal';

const Game = () => {
  const [players, setPlayers] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [winner, setWinner] = useState(null);

  let children;
  const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const symbols = ['Q', 'Z', 'W', 'P', 'K', 'M', 'B', 'S'];
  const handleNewGame = (event, number) => {
    event.preventDefault();
    setPlayers(number);
  };

  const handleReset = () => {
    
  };

  const handlePlayerSelect = (event, data) => {
    event.preventDefault();
    setPlayers(data);
  };

  if(!players && isOpen) {
    children = (
      <h1>Logo!</h1>,
      <PlayersForm handleSubmit={handleNewGame} />
    );
  }

  if(players && isOpen && !winner) {
    children = (
      <PlayerSelection colors={colors} symbols={symbols} handleSubmit={handlePlayerSelect} />,
      <PlayersList players={players} />
    );
  }

  if(winner && isOpen) {
    children = <ResultMessage winner={winner} handleSubmit={handleReset} />;
  }

  return (
    <Modal>
      {children}
    </Modal>
  );
};


export default Game;
