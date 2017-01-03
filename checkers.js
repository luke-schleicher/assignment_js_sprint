
function Board(height, width) {
  this.height = height;
  this.width = width;

  this.grid = [new Array(8), new Array(8),
              new Array(8), new Array(8),
              new Array(8), new Array(8),
              new Array(8), new Array(8)];
}

var bProto = Board.prototype;

bProto.squareContents = function(xCoordinate, yCoordinate) {
  return this.grid[xCoordinate][yCoordinate];
};

bProto.rows = function() {
  var rows = new Array(this.height);
  for (var rowNumber = 0; rowNumber < rows.length; rowNumber++) {
    var row = new Array(this.width);
    for (var colNumber = 0; colNumber < row.length; colNumber++) {
      this.grid[colNumber][rowNumber];
    }
  }
};

function Piece(playerNumber, symbol) {
  this.playerNumber = playerNumber;
  this.symbol = symbol;
}

function Checkers() {
  this.board = new Board(8, 8);
  this.setBoard = function(setTopPieces, setBottomPieces) {
    this.setTopPieces();
    this.setBottomPieces();
  };

}

var cProto = Checkers.prototype;

cProto.setTopPieces = function() {

  //

  var rowOffset = rowNumber % 2 === 0 ? 0 : 1;

}



