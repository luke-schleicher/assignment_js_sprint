
function Board(height, width) {
  this.height = height;
  this.width = width;

  this.grid = [new Array(8), new Array(8),
              new Array(8), new Array(8),
              new Array(8), new Array(8),
              new Array(8), new Array(8)];

  this.squareContents = function(xCoordinate, yCoordinate) {
    return this.grid[xCoordinate][yCoordinate];
  };

}

function Piece(playerNumber, symbol) {
  this.playerNumber = playerNumber;
  this.symbol = symbol;
}

function Checkers() {
  this.board = new Board(8, 8);
  this.setBoard = function(setTopPieces, setBottomPieces) {
    setTopPieces();
    setBottomPieces();
  }
}
