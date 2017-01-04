
/*
 * BOARD
*/
function Board() {
  this.height = 8;
  this.width = 8;
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

  for(var rowNumber = 0; rowNumber < rows.length; rowNumber++) {

    var row = new Array(this.width);

    rows[rowNumber] = row;

    for(var colNumber = 0; colNumber < row.length; colNumber++) {

      row[colNumber] = this.columns()[colNumber][rowNumber];

    }
  }

  return rows;
};

bProto.columns = function() {
  return this.grid;
};

bProto.render = function() {
  var rows = this.rows();

  for(var rowNumber = rows.length - 1; rowNumber >= 0; rowNumber--) {
    console.log("\n" + this.visualizeRow(rows[rowNumber], rowNumber));
  }

};

bProto.visualizeRow(row, rowNumber) {

  var rowVisualization = row.map(function(contents, index) {

    if (contents) {
      return contents.symbol;
    } else {
      if (index % 2 === 0) {
        return '#';
      } else {
        return ' ';
      }
    }

  });

  return rowVisualization.join('');
};

function Piece(playerNumber, symbol) {
  this.playerNumber = playerNumber;
  this.symbol = symbol;
}

function Checkers() {
  this.board = new Board();
  this.setBoard = function(setTopPieces, setBottomPieces) {
    this.setTopPieces();
    this.setBottomPieces();
  };

}

var cProto = Checkers.prototype;

cProto.setTopPieces = function() {
  var rowOffset = rowNumber % 2 === 0 ? 0 : 1;
};

var board = new Board(8, 8);

