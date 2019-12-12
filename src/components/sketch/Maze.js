export default class Maze {
  constructor(p, h, w, cellH, cellW, cellMap) {
    this.x = 40;
    this.y = 20;
    this.h = h;
    this.w = w;
    this.cellH = cellH;
    this.cellW = cellW;
    this.cellMap = JSON.parse(cellMap);
    this.p = p;
  }

  getCellInfo(x, y) {

    let cell = this.cellMap.find(cell => {
      return cell.coordinates.x === x && cell.coordinates.y === y;
    });

    return Object.values(cell.exits);

  }

  getEnd() {
    let winningCell = this.cellMap[((this.h * this.w) / 2) + this.h / 2];
    return [winningCell.coordinates.x, winningCell.coordinates.y];
  }

  showCells() {

    let cell = 0;
    for(let col = 0; col < this.w; col++) {

      for(let row = this.h; row > 0; row--) {

        let cellX = (col * this.cellW) + this.x;
        let cellY = (row * (this.cellH)) + this.y;
        // color of cells
        // let img = loadImage('assets/spacebg.jpg')
        let color = '#1919A6';
        // middle cell color
        if(cell === ((this.h * this.w) / 2) + this.h / 2) color = 155;

        this.makeCell(this.cellMap[cell], cellX, cellY, this.cellH, this.cellW, color);

        cell++;
      }
    }

  }

  makeCell(cellData, x, y, w, h, color) {

    let exits = Object.keys(cellData.exits);
    let wallE = { x1: x + w, y1: y, x2: x + w, y2: y + h };
    let wallW = { x1: x, y1: y, x2: x, y2: y + h };
    let wallN = { x1: x, y1: y, x2: x + w, y2: y };
    let wallS = { x1: x, y1: y + h, x2: x + w, y2: y + h };

    let walls = { e: wallE, w: wallW, n: wallN, s: wallS };

    exits.forEach(exit => {
      if(walls[exit]) delete walls[exit];
    });


    // cell color
    this.p.noStroke();
    this.p.fill(color);
    // image(img, 480, 480)
    this.p.rect(x, y, w, h);

    Object.values(walls).forEach(wall => {

      //cell walls
      this.p.strokeWeight(2);
      this.p.stroke('#ff00ee');
      this.p.line(wall.x1, wall.y1, wall.x2, wall.y2);
    });

  }
}
