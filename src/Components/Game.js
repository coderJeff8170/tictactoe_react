import { useState } from 'react';
import Board from "./Board";
import { getPosition, calculateWinner } from '../Utilities/helperUtilities';


const Game = (props) => {

    const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] =  useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [priorMovesAscending, setPriorMovesAscending] = useState(true);

  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = currentHistory[currentHistory.length-1];

    const position = getPosition(i);
    
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) return;
    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(currentHistory.concat([{ squares: squares, position: position}]));
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const handleToggleMovesDisplay = () => {
    setPriorMovesAscending(!priorMovesAscending);
  }
  
    // const history = this.state.history; note that prior functions inside render function work fine
    // when redefined as fat arrow constants when render function is eliminated for function componentry
    const current = history[stepNumber];

    const priorMoves = history.map((step, move) => {
        let col = 0; 
        let row = 0;
        if(step.position){
          col = step.position[0];
          row = step.position[1];
        }
        
        const desc = move ? 
        `Go to move ${move} (col: ${col}, row: ${row})` :
        `Go to game start`
      return (
      <li key={move}>
          <button 
          data-testid={`move${move}`}
          className={move === stepNumber ? "boldText" : ""}
          onClick={() => jumpTo(move)}
          >
            {desc}
          </button>
      </li>
      );
    });

    let status;
    const winner = calculateWinner(current.squares);

    if(winner) {
      status = `${winner} has won!`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button 
            onClick={() => handleToggleMovesDisplay()}
          >
            {priorMovesAscending ? "Show Moves Descending" : "Show Moves Ascending"}
          </button>
          <ol>
            {priorMovesAscending ? priorMoves : priorMoves.reverse()}
          </ol>
        </div>
      </div>
    );
  
}

export default Game;