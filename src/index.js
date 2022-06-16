import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Components/Game';
import './index.css';


//  TODO: Display the location for each move in the format (col, row) in the move history list.[X]
  //a: make space for each prop[X]
  //b: make a property on each move to store the col and row [x]
  //c: get the position of both with a helper function return formate [col, row] [X]
  //
//  TODO: Bold the currently selected item in the move list.[X]
  //a: 
//  TODO: Rewrite Board to use two loops to make the squares instead of hardcoding them.[X]
//  TODO: Add a toggle button that lets you sort the moves in either ascending or descending order.[X]
  //a: add the button x
  //b: add a method to handle the click - what does it do x
  //c: add a property that records the state of the button x
  //d: conditionally render prior moves asc or desc depending on state; x
//  TODO: When someone wins, highlight the three squares that caused the win.
  //a: css class to highlight the square
  //b: add class conditionally and leverage the col and row to show which squares won, or maybe alter the helper func
//  TODO: When no one wins, display a message about the result being a draw.
  //c: conditionally render draw message when all squares are full and calc winner never was true - possibly two new state vars...

// const Square = (props) => {
    
//       return (
//         <button 
//             className="square" 
//             onClick={props.onClick}
//             //{props.isWinningSquare?classList.append("highlight"):classList.remove("highlight")}
//         >
//           {props.value}
//         </button>
//       ); 
// }
  
// const Board = (props) => {
    
//     const renderSquare = (i) => {
      
//       return (
//         <Square 
//             key={`square${i}`}
//             value={props.squares[i]}
//             onClick={() => props.onClick(i)}
//             //maybe a prop for isWinningSquare
//         />
//       );
//     }

//     const renderBoard = () => {
//       let board = [];
//       let k = 0;
//       for(let i=0; i<3; i++){
//         let row = []
//         for(let j=0; j<3; j++) {
//           row.push(renderSquare(k));
//           k++;
//         }
//         board.push(
//         <div 
//           key={`row ${i}`} 
//           className="board-row"
//           >
//             {row}
//         </div>)
//       }
//       return board;
//     }
  
    
//       return (
//         <div>
//           {renderBoard()}
//         </div>
//       );
    
//   }

//FIXME: functionality has broken for slicing array of moves when starting from a specific move and eliminating the extras
  
  // const Game = (props) => {

  //     const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  //     const [stepNumber, setStepNumber] =  useState(0);
  //     const [xIsNext, setXIsNext] = useState(true);
  //     const [priorMovesAscending, setPriorMovesAscending] = useState(true);

  //   const handleClick = (i) => {
  //     const currentHistory = history.slice(0, stepNumber + 1);
  //     const current = currentHistory[currentHistory.length-1];

  //     const position = getPosition(i);
      
  //     const squares = current.squares.slice();
  //     if(calculateWinner(squares) || squares[i]) return;
  //     squares[i] = xIsNext ? 'X' : 'O';

  //     setHistory(history.concat([{ squares: squares, position: position}]));
  //     setStepNumber(history.length);
  //     setXIsNext(!xIsNext);
  //   }

  //   const jumpTo = (step) => {
  //     setStepNumber(step);
  //     setXIsNext((step % 2) === 0);
  //   }

  //   const handleToggleMovesDisplay = () => {
  //     setPriorMovesAscending(!priorMovesAscending);
  //   }
    
  //     // const history = this.state.history; note that prior functions inside render function work fine
  //     // when redefined as fat arrow constants when render function is eliminated for function componentry
  //     const current = history[stepNumber];

  //     const priorMoves = history.map((step, move) => {
  //         let col = 0; 
  //         let row = 0;
  //         if(step.position){
  //           col = step.position[0];
  //           row = step.position[1];
  //         }
          
  //         const desc = move ? 
  //         `Go to move ${move} (col: ${col}, row: ${row})` :
  //         `Go to game start`
  //       return (
  //       <li key={move}>
  //           <button 
  //           className={move === stepNumber ? "boldText" : ""}
  //           onClick={() => jumpTo(move)}
  //           >
  //             {desc}
  //           </button>
  //       </li>
  //       );
  //     });

  //     let status;
  //     const winner = calculateWinner(current.squares);

  //     if(winner) {
  //       status = `${winner} has won!`;
  //     } else {
  //       status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  //     }

  //     return (
  //       <div className="game">
  //         <div className="game-board">
  //           <Board 
  //           squares={current.squares}
  //           onClick={(i) => handleClick(i)}
  //           />
  //         </div>
  //         <div className="game-info">
  //           <div>{status}</div>
  //           <button 
  //             onClick={() => handleToggleMovesDisplay()}
  //           >
  //             {priorMovesAscending ? "Show Moves Descending" : "Show Moves Ascending"}
  //           </button>
  //           <ol>
  //             {priorMovesAscending ? priorMoves : priorMoves.reverse()}
  //           </ol>
  //         </div>
  //       </div>
  //     );
    
  // }

  // function getPosition(square) {
  //   let position;
  //   switch(square) {
  //     case 0:
  //       position = [1, 1];
  //       break;
  //     case 1:
  //       position = [2, 1];
  //       break;
  //     case 2:
  //       position = [3, 1];
  //       break;
  //     case 3:
  //       position = [1, 2];
  //       break;
  //     case 4:
  //       position = [2, 2];
  //       break;
  //     case 5:
  //       position = [3, 2];
  //       break;
  //     case 6:
  //       position = [1, 3];
  //       break;
  //     case 7:
  //       position = [2, 3];
  //       break;
  //     default:
  //       position = [3, 3];
  //   }
  //   return position;
  // }

  // function calculateWinner(squares) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       console.log(lines[i]);//highlight these squares with a method
  //       highlightSquares(lines[i]);
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

  // function highlightSquares(squaresToHighlight) {
  //   //iterate squares
  //   //if square number is in squares to highlight, add class.
  // }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  