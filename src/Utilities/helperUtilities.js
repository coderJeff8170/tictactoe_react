export function getPosition(square) {
    let position;
    switch(square) {
      case 0:
        position = [1, 1];
        break;
      case 1:
        position = [2, 1];
        break;
      case 2:
        position = [3, 1];
        break;
      case 3:
        position = [1, 2];
        break;
      case 4:
        position = [2, 2];
        break;
      case 5:
        position = [3, 2];
        break;
      case 6:
        position = [1, 3];
        break;
      case 7:
        position = [2, 3];
        break;
      default:
        position = [3, 3];
    }
    return position;
  }

  export function calculateWinningMoves(squares) {
    // console.log(squares);
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return lines[i];
      }
    }
    return null;
  }

  export function calculateWinner(squares) {
    console.log(squares)
    const winningMoves = calculateWinningMoves(squares);
    console.log(winningMoves)
    return winningMoves ? squares[winningMoves[0]] : null;
  }

  export function highlightSquares(squares) {
    // const winningMoves = calculateWinningMoves(squares);
    //iterate squares
    //if square number is in squares to highlight, add class.

  }

  export function isWinningSquare(square) {
    
  }