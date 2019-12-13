import Player from './Player.js';
import Maze from './Maze.js';

export default function sketch(p) {

  let cellSize = 25;
  let playerPos = 25;
  let playerSize = 20;


  let players = null;
  let maze;
  let playerPositions = null;
  let cellMap = null;

  p.setup = () => {
    p.createCanvas(680, 680);

    if(players && playerPositions) {
      maze = new Maze(p, 25, 25, cellSize, cellSize, cellMap);
    } else {
      setTimeout(() => {
        p.setup();
      }, 100);
    }


  };

  //state
  // end = maze.getEnd();


  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if(newProps.players) {
      players = newProps.players;
      playerPositions = players.reduce((acc, val) => {
        acc[val.userId] = { x: val.xPos };
        acc[val.userId].y = val.yPos;
        return acc;
      }, {});

    }
    if(newProps.cellMap) {
      cellMap = newProps.cellMap;
    }


  };


  p.draw = () => {

    if(maze && maze.cellMap) {
      maze.showCells();
    }
    // //edit for all players
    if(playerPositions) {
      players.map(playerObj => {
        let x = playerPositions[playerObj.userId].x;
        let y = playerPositions[playerObj.userId].y;
        return new Player(p, x, y, playerPos, playerPos, playerSize, playerSize, playerObj.userId, playerObj.color, playerObj.symbol).show();
      });

    }
  };
}




//transfer this functionality to state

// function keyPressed() {

//   let moves = maze.getCellInfo(player.xPos, player.yPos);

//   if(keyCode === UP_ARROW) {
//     player.updateCoords('yPos', 1, -10, moves);
//   }
//   if(keyCode === DOWN_ARROW) {
//     player.updateCoords('yPos', -1, 10, moves);

//   }

//   if(keyCode === LEFT_ARROW) {
//     player.updateCoords('xPos', -1, -10, moves);


//   } if(keyCode === RIGHT_ARROW) {
//     player.updateCoords('xPos', 1, 10, moves);

//   }
// }

