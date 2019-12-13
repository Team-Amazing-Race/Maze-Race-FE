import Player from './Player.js';
import Maze from './Maze.js';

export default function sketch(p) {

  let players = null;
  let maze;
  let playerPositions = null;
  let cellMap = null;

  p.setup = () => {
    p.createCanvas(800, 800);

    if(players && playerPositions) {
      maze = new Maze(p, 25, 25, 20, 20, cellMap);
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
    p.background(220);

    if(maze && maze.cellMap) {
      maze.showCells();
    }
    // //edit for all players
    if(playerPositions) {
      console.log(playerPositions);
      players.map(playerObj => {
        let x = playerPositions[playerObj.userId].x;
        let y = playerPositions[playerObj.userId].y;
        return new Player(p, x, y, 20, 20, 20, 20, playerObj.userId).show();
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

