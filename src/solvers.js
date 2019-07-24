/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({'n': n});
  for (var rowIndex = 0; rowIndex < n; rowIndex ++) {
    var colIndex = 0;
    solution.togglePiece(rowIndex, colIndex);
    while (solution.hasAnyRooksConflicts() && colIndex < n-1) {
      solution.togglePiece(rowIndex, colIndex);
      colIndex++;
      solution.togglePiece(rowIndex, colIndex);
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution.rows()));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({'n': n});
  console.log('original', solution.rows());
  var helper = function(size, curRow, board) {
    if (curRow === size) { //When "current row" is equal to the size, the board is filled
      if (!board.hasAnyRooksConflicts()) {
        solutionCount++;
      }
    } else if (!board.hasAnyRooksConflicts()){
      for (var i = 0; i < size; i++) {
        boardMatrix = board.rows();
        newMatrix = [];
        for (var k = 0; k < boardMatrix.length; k++) {
          newMatrix.push(boardMatrix[k].slice());
        }
        nBoard = new Board(newMatrix);
        nBoard.togglePiece(curRow,i);
        helper(size,curRow+1,nBoard);
      }
    }
  };
  helper(n,0,solution);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n});

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var solution = new Board({'n': n});
  console.log('original', solution.rows());
  var helper = function(size, curRow, board) {
    if (curRow === size) { //When "current row" is equal to the size, the board is filled
      if (!board.hasAnyQueensConflicts()) {
        solutionCount++;
      }
    } else if (!board.hasAnyQueensConflicts()){
      for (var i = 0; i < size; i++) {
        boardMatrix = board.rows();
        newMatrix = [];
        for (var k = 0; k < boardMatrix.length; k++) {
          newMatrix.push(boardMatrix[k].slice());
        }
        nBoard = new Board(newMatrix);
        nBoard.togglePiece(curRow,i);
        helper(size,curRow+1,nBoard);
      }
    }
  };
  helper(n,0,solution);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
