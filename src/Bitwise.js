//Going to attempt the bitwise solution (or go as far as i possible can with this)
find8Queens = () => {
  var solutions = 0;
  var binArr = [128, 64, 32, 16, 8, 4, 2, 1];
  var startCol = 0 << 1;
  var leftDiag = 0 >> 1;
  var rightDiag = 0 << 1;
  var maxIndex = 7;

  var visualizeBinary = (n) => {
    console.log(("00000000"+n.toString(2)).slice(-8));
  };

  var helper = (col, ld, rd, row, q) => {
    col = col + q;  //processing everything with the addition of the new queen
    ld = (ld + q) << 1;
    if (ld > 255) {
      ld = ld - 256;
    }
    rd = (rd + q) >> 1;
    var attacking = (col | ld | rd); //Bitwise combine all attacks to check conflicts
    if (row === maxIndex) { //Base Case
      if (attacking < 255) { //If all bits = 1, then 255 is what it equals total(meaning no remaining place for final queen)
        solutions++;
      }
    } else {
      var remaining = 255-attacking;
      //console.log(remaining);
      while(remaining > 0) {
        if (remaining >= 128) {
          remaining = remaining - 128;
          helper(col,ld,rd,row+1,128);
        } else if (remaining >= 64) {
          remaining = remaining - 64;
          helper(col,ld,rd,row+1,64);
        } else if (remaining >= 32) {
          remaining = remaining - 32;
          helper(col,ld,rd,row+1,32);
        }  else if (remaining >= 16) {
          remaining = remaining - 16;
          helper(col,ld,rd,row+1,16);
        }  else if (remaining >= 8) {
          remaining = remaining - 8;
          helper(col,ld,rd,row+1,8);
        }  else if (remaining >= 4) {
          remaining = remaining - 4;
          helper(col,ld,rd,row+1,4);
        }  else if (remaining >= 2) {
          remaining = remaining - 2;
          helper(col,ld,rd,row+1,2);
        } else {
          remaining = remaining - 1;
          helper(col,ld,rd,row+1,1);
        }
      }
      //helper(col,ld,rd,row+1,q);
    }
    //console.log(col, ld, rd, row);
  };

  helper(startCol, leftDiag, rightDiag, 0, 0); //everything starts equal to 0
  //visualizeBinary(235);
  return solutions;
};

var result = find8Queens();
console.log(result);