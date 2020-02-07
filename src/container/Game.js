import React, { useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../components/sketch/Sketch';
import PropTypes from 'prop-types';
import { useGameState } from '../socket';
import useGameEmitters from '../components/hooks/gameState';
import styles from '../components/styles/P5Wrapper.css';
import outruntheempire from '../assets/sound/outruntheempire.mp3';


const Game = ({ match, history }) => {
  // State
  const { movePlayer } = useGameEmitters();
  const eventState = useGameState();

  const player = eventState.room.players.find(p => {
    return p.userId === eventState.userId;
  });

  let xPos = player.xPos;
  let yPos = player.yPos;

  const playerCanMoveTo = (direction) => {

    const moves = {
      'up': { xPos: 0, yPos: 1 },
      'down': { xPos: 0, yPos: -1 },
      'left': { xPos: -1, yPos: 0 },
      'right': { xPos: 1, yPos: 0 }
    };

    const dir = moves[direction];

    const newX = xPos + dir.xPos;
    const newY = yPos + dir.yPos;

    const cell = JSON.parse(eventState.room.cellMap).find(cell => {
      return cell.coordinates.x === xPos && cell.coordinates.y === yPos;
    });

    const dirBool = Object.values(cell.exits).some(exit => {
      return exit.x === newX && exit.y === newY;
    });

    if(dirBool) {
      xPos = newX;
      yPos = newY;
    }

    return dirBool;

  };

  //Keypress logic
  const keyDownListener = (event) => {
    const keyName = event.key;
    if(keyName === 'ArrowUp') {
      if(playerCanMoveTo('up')) {
        movePlayer({ dir: 'up', room: eventState.room.name, userId: eventState.userId, x: xPos, y: yPos });
      }
    }
    if(keyName === 'ArrowDown') {
      if(playerCanMoveTo('down')) {
        movePlayer({ dir: 'down', room: eventState.room.name, userId: eventState.userId, x: xPos, y: yPos });
      }
    }
    if(keyName === 'ArrowRight') {
      if(playerCanMoveTo('right')) {
        movePlayer({ dir: 'right', room: eventState.room.name, userId: eventState.userId, x: xPos, y: yPos });
      }
    }
    if(keyName === 'ArrowLeft') {
      if(playerCanMoveTo('left')) {
        movePlayer({ dir: 'left', room: eventState.room.name, userId: eventState.userId, x: xPos, y: yPos });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownListener);
    return () => {
      window.removeEventListener('keydown', keyDownListener);
    };
  }, [eventState.winner]);

  useEffect(() => {
    if(eventState.winner) {
      history.push(`/${match.params.roomId}/results`);
    }
  });

  return (
    <div className={styles.P5WrapperTop}>
      <P5Wrapper sketch={sketch} players={eventState.room.players} cellMap={eventState.room.cellMap} />
      <audio src={outruntheempire} controls autoPlay loop />
      <p>Race to the finish!</p>
    </div>
  );
};

Game.propTypes = {
  match: PropTypes.obj,
  history: PropTypes.object.isRequired
};

export default Game;
