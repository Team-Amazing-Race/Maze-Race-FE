// import Player from './Player.js';
import Maze from './Maze.js';

export default function sketch(p) {

  let state = null;



  // let player;
  let maze;
  // let end;
  // let players;

  // TODO create players from state.playerslist


  p.setup = () => {
    p.createCanvas(800, 800);

    if(state) {
      maze = new Maze(p, 25, 25, 20, 20, state.room.cellMap);
    } else {
      setTimeout(() => {
        p.setup();
      }, 100);
    }
  };

  //state
  // end = maze.getEnd();


  // players = () => {
  //   state.room.players.forEach(playerObj => {
  //     return new Player(p, playerObj.xPos, -playerObj.yPos, 0, 0, 10, 10);
  //   });
  // };


  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
    if(newProps.state) {
      state = newProps.state;
    }
  };


  p.draw = () => {
    p.background(220);

    if(maze && maze.cellMap) {
      maze.showCells();
    }
    // //edit for all players
    // players.forEach(user => {
    //   user.show();
    // });

    // if(player.xPos === end[0] && player.yPos === end[1]) {
    //   p.fill(0);
    //   p.rect(20, 30, 200, 200);
    //   p.fill(0, 102, 153);
    //   p.text('you freakin win', 120, 120);
    // }



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

