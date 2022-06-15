import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


//  TODO: Display the location for each move in the format (col, row) in the move history list.[X]
  //a: make space for each prop[X]
  //b: make a property on each move to store the col and row [x]
  //c: get the position of both with a helper function return formate [col, row] [X]
  //
//  TODO: Bold the currently selected item in the move list.[X]
  //a: 
//  TODO: Rewrite Board to use two loops to make the squares instead of hardcoding them.
//  TODO: Add a toggle button that lets you sort the moves in either ascending or descending order.
//  TODO: When someone wins, highlight the three squares that caused the win.
//  TODO: When no one wins, display a message about the result being a draw.

const Square = (props) => {
    
      return (
        <button 
            className="square" 
            onClick={props.onClick}
        >
          {props.value}
        </button>
      ); 
}
  
  class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square 
            key={`square${i}`}
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
      );
    }

    renderBoard() {
      let board = [];
      let k = 0;
      for(let i=0; i<3; i++){
        let row = []
        for(let j=0; j<3; j++) {
          row.push(this.renderSquare(k));
          k++;
        }
        board.push(
        <div 
          key={`row ${i}`} 
          className="board-row"
          >
            {row}
        </div>)
      }
      return board;
    }
  
    render() {
      return (
        <div>
          {this.renderBoard()}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              history: [{
                  squares: Array(9).fill(null)
              }],
              stepNumber: 0,
              xIsNext: true
          }
      }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length-1];

      const position = getPosition(i);
      
      const squares = current.squares.slice();
      if(calculateWinner(squares) || squares[i]) return;
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
          history: history.concat([{ squares: squares, position: position}]),
          stepNumber: history.length,
          xIsNext: !this.state.xIsNext
      })
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      })
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];

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
            className={move === this.state.stepNumber ? "boldText" : ""}
            onClick={() => this.jumpTo(move)}
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
        status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{priorMoves}</ol>
          </div>
        </div>
      );
    }
  }

  function getPosition(square) {
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

  function calculateWinner(squares) {
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
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  