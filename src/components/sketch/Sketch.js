export default function sketch(p) {

  let rooms;
  let currentPlayer;
  let currentRoom;
  let playerData;

  p.myCustomRedrawAccordingToNewPropsHandler = (props) => {
    if(props.rooms) {
      rooms = props.rooms;
    }

    if(props.currentPlayer) {
      currentPlayer = props.currentPlayer;
    }

    if(props.currentRoom) {
      currentRoom = props.currentRoom;
    }
  };

  const player = (x, y, h, w) => {
    p.stroke(0);
    p.rect(x * 10, y * 10, h, w);
  };

  const playerPositions = () => {
    rooms.find(room => {
      return room.name === currentRoom;
    })
      .players.forEach(playerObj => {
        return player(playerObj.xPos, -playerObj.yPos, 10, 10);
      });
  };

  p.setup = () => {
    p.createCanvas(500, 500);
  };

  p.draw = () => {
    p.background(100);
    playerPositions();



  };
}
