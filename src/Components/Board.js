import Square from './Square';

const Board = (props) => {
    
    const renderSquare = (i) => {
      
      return (
        <Square 
            key={`square${i}`}
            value={props.squares[i]}
            onClick={() => props.onClick(i)}
            //maybe a prop for isWinningSquare
        />
      );
    }

    const renderBoard = () => {
      let board = [];
      let k = 0;
      for(let i=0; i<3; i++){
        let row = []
        for(let j=0; j<3; j++) {
          row.push(renderSquare(k));
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
  
    
      return (
        <div>
          {renderBoard()}
        </div>
      );
    
  }

  export default Board;