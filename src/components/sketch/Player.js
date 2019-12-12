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

    //PLAYER LOOK

    this.p.noStroke();
    this.p.fill('#ff0000');
    this.p.rect(this.x, this.y, this.h - 1, this.w - 1);
    this.p.fill(255);
    this.p.text('@', this.x, this.y + this.w - 2);
    this.p.textAlign(LEFT, BASELINE);
    this.p.textSize(20);
  }

  move(axis, dir) {

    this[axis[0]] += dir;

  }

  updateCoords(axis, dir, xyDir, moves) {


    let newX = this.xPos;
    let newY = this.yPos;

    if(axis === 'xPos') {
      newX += dir;
    } else {
      newY += dir;
    }

    let newCoords = [newX, newY];

    if(moves.some(coords => {
      return coords.x === newCoords[0] && coords.y === newCoords[1];
    })
    ) {
      this.xPos = newX;
      this.yPos = newY;

      this.move(axis, xyDir);
    }

  }
}
