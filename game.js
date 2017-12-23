let count = 0;
let buttonsClicked = [];
let xMoves = [];
let oMoves = [];
let winMoves = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

var insert = function(id) {
  if (!buttonsClicked.includes(id)) {
    buttonsClicked.push(id);
    document.getElementById(id).innerText = selectButton();
  }
  if (count % 2 == 0) {
    oMoves.push(id);
  } else {
    xMoves.push(id);
  }
  hasWon(xMoves,winMoves,"X");
  hasWon(oMoves,winMoves,"O");
  if(count==9){
    document.getElementById("won").innerText = "match drawn!!!!";
  }
};

var selectButton = function() {
  if (count % 2 == 0) {
    count++;
    return 'X';
  }
  count++;
  return 'O';
};

var isSubset = function(list1, list2) {
  return list2.every(function(element, index) {
    return list1.includes(list2[index]);
  });
};

let hasWon = function(list1, winMoves, symbol) {
  for (let i=0;i<winMoves.length;i++) {
    if (isSubset(list1, winMoves[i])) {
      document.getElementById("won").innerText = symbol + " won the game";
      disableGame();
    }
  }
};

var disableGame = function(){
  for (let i=1;i<=9;i++) {
    document.getElementById(i).disabled = true;
  }
};
