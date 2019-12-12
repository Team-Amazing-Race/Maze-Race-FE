import React, { useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Modal from '../components/Modal';
import sketch from '../components/sketch/Sketch';
import PropTypes from 'prop-types';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';


const Game = ({ history }) => {

  // State
  const { movePlayer } = useGameEmitters();
  const eventState = useGameState();

  //Keypress logic

  const keyDownListener = (event) => {
    const keyName = event.key;
    if(keyName === 'ArrowUp') {
      movePlayer({ dir: 'up', name: eventState.name, room: eventState.inRoom });
    }
    if(keyName === 'ArrowDown') {
      movePlayer({ dir: 'down', name: eventState.name, room: eventState.inRoom });
    }
    if(keyName === 'ArrowRight') {
      movePlayer({ dir: 'right', name: eventState.name, room: eventState.inRoom });
    }
    if(keyName === 'ArrowLeft') {
      movePlayer({ dir: 'left', name: eventState.name, room: eventState.inRoom });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownListener);
    return () => {
      window.removeEventListener('keydown', keyDownListener);
    };
  });




  // Check if in room

  // let children;


  //Results screen
  // if(winner && isOpen) {
  //   children = <ResultMessage winner={winner} handleSubmit={handleReset} />;
  // }

  return (
    <>
      <Modal>
        {children}
      </Modal>
      {eventState.inRoom && eventState.name && <P5Wrapper sketch={sketch} state={eventState}  />}
    </>
  );
};

Game.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Game;
