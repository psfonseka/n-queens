//Going to attempt the bitwise solution (or go as far as i possible can with this)
find8Queens = () => {
  var solutions = 0;
  var binArr = [128,64,32,16,8,4,2,1]
  var startCol = 0 << 1;
  var leftDiag = 0 >> 1;
  var rightDiag = 0 << 1;
  var maxIndex = 7;

  var visualizeBinary = (n) => {
    console.log(("00000000"+n.toString(2)).slice(-8));
  }

  var helper = (col, ld, rd, row, q) => {
    col = col + q;  //processing everything with the addition of the new queen
    ld = (ld + q) << 1;
    rd = (rd + q) >> 1;
    var remaining = (col | ld | rd); //Bitwise combine all attacks to check conflicts
    if(row === maxIndex) { //Base Case
      if (remaining < 255) { //If all bits = 1, then 255 is what it equals total(meaning no remaining place for final queen)
        solutions++;
      }
    } else {
      console.log(255-remaining);
    }
    console.log(col);
    console.log(ld);
    console.log(rd);
    console.log(row);
  }

  helper(startCol, leftDiag, rightDiag, 0, 0); //everything starts equal to 0
  //visualizeBinary(235);
}

var result = find8Queens();