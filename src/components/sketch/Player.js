export default class Player {
  constructor(p, xPos, yPos, x, y, w, h, id, color, symbol) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.xPos = xPos;
    this.yPos = yPos;
    this.p = p;
    this.id = id;
    this.color = color;
    this.symbol = symbol;
  }
  show() {
    this.p.noStroke();
    this.p.fill(this.color);
    this.p.rect(this.x * this.xPos + 2.5, this.y * (26 - this.yPos) + 2.5 + this.y, this.h, this.w);
    this.p.fill(0);
    this.p.textSize(20);
    this.p.text(this.symbol, this.x * this.xPos + 2.5, this.y * (26 - this.yPos) + 45);
  }

}
