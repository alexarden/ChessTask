// create Chess table element
let body = document.getElementsByTagName('body');

let table = document.createElement('table');

document.body.appendChild(table);

let white = 'gold';
let black = 'black';


//make piece array and class to track them on the board

let pieces = [];

class Piece{
  constructor(row, col, player, type){
    this.row = row;
    this.col = col;
    this.player = player;
    this.type = type;
  }
}

function getInitialBoard() {
  let result = [];
  //Gold pieces
  result.push(new Piece(0, 0, "rook", white));
  result.push(new Piece(0, 7, "rook", white));
  result.push(new Piece(0, 1, "knight", white));
  result.push(new Piece(0, 6, "knight", white));
  result.push(new Piece(0, 2, "bishop", white));
  result.push(new Piece(0, 5, "bishop", white));
  result.push(new Piece(0, 3, "king", white));
  result.push(new Piece(0, 4, "queen", white));
  result.push(new Piece(1, 0, "pawn", white));
  result.push(new Piece(1, 1, "pawn", white));
  result.push(new Piece(1, 2, "pawn", white));
  result.push(new Piece(1, 3, "pawn", white));
  result.push(new Piece(1, 4, "pawn", white));
  result.push(new Piece(1, 5, "pawn", white));
  result.push(new Piece(1, 6, "pawn", white));
  result.push(new Piece(1, 7, "pawn", white));;
  //Black pieces
  result.push(new Piece(7, 0, "rook", black));
  result.push(new Piece(7, 7, "rook", black));
  result.push(new Piece(7, 1, "knight", black));
  result.push(new Piece(7, 6, "knight", black));
  result.push(new Piece(7, 2, "bishop", black));
  result.push(new Piece(7, 5, "bishop", black));
  result.push(new Piece(7, 3, "king", black));
  result.push(new Piece(7, 4, "queen", black));
  result.push(new Piece(6, 0, "pawn", black));
  result.push(new Piece(6, 1, "pawn", black));
  result.push(new Piece(6, 2, "pawn", black));
  result.push(new Piece(6, 3, "pawn", black));
  result.push(new Piece(6, 4, "pawn", black));
  result.push(new Piece(6, 5, "pawn", black));
  result.push(new Piece(6, 6, "pawn", black));
  result.push(new Piece(6, 7, "pawn", black));

  return result;
}


//add img function
const addImage = (cell,player,type) => {
  const image = document.createElement('img');
  image.src =`/img/${player}_${type}.png`;
  image.classList.add(`${player}Pawns`)
  cell.appendChild(image);
}

//when one square(cell) clicked the other will turn off
let selectedCell;

const selectCell = (e) => {
  if(selectedCell !== undefined){
    selectedCell.classList.remove('active');
  };
  selectedCell = e.currentTarget;
  selectedCell.classList.add('active');
}


//create rows.

let rows = document.getElementsByTagName('tr');

for(let i = 0; i < 8; i++){
  table.appendChild(document.createElement('tr')).id='row_'+i
}; 

// Create and init Chess game, pieces and squares(cells).
const createChessGame = () => {
  for(let i = 0; i < 8; i++){
  rows[i]
    for(let j = 0; j < 8; j++){
      let cell = rows[j].appendChild(document.createElement('td'))
      cell.id='row-'+(j)+'_col-'+(i) 

    // Creating selected square when palyer click on it.
    cell.addEventListener('click',selectCell)
    console.log(cell)
    }
  }
  pieces = getInitialBoard();

  for (let piece of pieces) {
    addImage(table.rows[piece.row].cells[piece.col],piece.type ,piece.player);
  }
}

createChessGame();










