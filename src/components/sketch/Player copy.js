export default class Player {
  constructor(p, xPos, yPos, x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xPos = xPos;
    this.yPos = yPos;
    this.p = p;
  }
  show() {
    this.p.noStroke();
    this.p.fill(0);
    this.p.rect(this.x, this.y, this.h, this.w);
  }


  //transfer to state

  // move(axis, dir) {

  //   this[axis[0]] += dir;

}

//transfer to state
updateCoords(axis, dir, xyDir, moves) {


  let newX = this.xPos;
  let newY = this.yPos;

  if (axis === 'xPos') {
    newX += dir;
  } else {
    newY += dir;
  }

  let newCoords = [newX, newY];

  if (moves.some(coords => {
    return coords.x === newCoords[0] && coords.y === newCoords[1];
  })
  ) {
    this.xPos = newX;
    this.yPos = newY;

    this.move(axis, xyDir);
  }
}
}
