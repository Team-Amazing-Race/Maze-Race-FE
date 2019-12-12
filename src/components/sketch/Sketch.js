import Player from './Player';
import Maze from './Maze';
import MazeData from './MazeData';

let xPos = 1;
let yPos = 20;
let player;
let maze;
let mazeData;
let end;
let img;

export default function setup(p) {
  player = new Player(xPos, yPos, 40, 40, 20, 20);
  mazeData = new MazeData();
  maze = new Maze(20, 20, 20, 20, mazeData.data());
  end = maze.getEnd();


  img = p.loadImage('assets/spacebg.jpg', img => {
    p.image(img, 480, 480);
  });


  p.createCanvas(480, 480);

}

export function draw(p) {

  //BACKGROUND COLOR
  p.background(img);


  maze.showCells();
  player.show();

  if(player.xPos === end[0] && player.yPos === end[1]) {
    p.fill(0);
    p.rect(20, 40, 400, 400);
    p.fill(0, 102, 153);
    p.text('you freakin win', 120, 120);
  }

}

// export function keyPressed() {

//   let moves = maze.getCellInfo(player.xPos, player.yPos);

//   if(keyCode === UP_ARROW) {
//     player.updateCoords('yPos', 1, -20, moves);
//   }
//   if(keyCode === DOWN_ARROW) {
//     player.updateCoords('yPos', -1, 20, moves);

//   }

//   if(keyCode === LEFT_ARROW) {
//     player.updateCoords('xPos', -1, -20, moves);


//   } if(keyCode === RIGHT_ARROW) {
//     player.updateCoords('xPos', 1, 20, moves);

//   }
// }

