import Player from './Player.js';
import Maze from './Maze.js';

export default function sketch(p) {

  let state;
  let cellMap;

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if (props.state) {
      state = props.state;
    }
    
    if (props.cellMap) {
      cellMap = props.cellMap;
    }

  }
};

let xPos = 1;
let yPos = 20;
let player;
let maze;
let end;


// TODO create players from state.playerslist

// const playerPositions = () => {
//   rooms.find(room => {
//     return room.name === currentRoom;
//   })
//     .players.forEach(playerObj => {
//       return player(playerObj.xPos, -playerObj.yPos, 10, 10);
//     });
// };

p.setup = () => {
  player = new Player(p, xPos, yPos, 20, 30, 10, 10);
  maze = new Maze(p, 20, 20, 10, 10, cellMap);
  end = maze.getEnd();

  p.createCanvas(300, 300);

};


p.draw = () => {
  p.background(220);
  maze.showCells();

  //edit for all players
  player.show();

  if (player.xPos === end[0] && player.yPos === end[1]) {
    p.fill(0);
    p.rect(20, 30, 200, 200);
    p.fill(0, 102, 153);
    p.text('you freakin win', 120, 120);
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

