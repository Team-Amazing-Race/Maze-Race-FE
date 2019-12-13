export default class Player {
  constructor(p, xPos, yPos, x, y, w, h, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xPos = xPos;
    this.yPos = yPos;
    this.p = p;
    this.id = id;
  }
  show() {
    console.log('SHOW');
    this.p.noStroke();
    this.p.fill(200);
    this.p.rect(this.x * this.xPos, (this.y * this.yPos) + this.y, this.h, this.w);
  }

}
