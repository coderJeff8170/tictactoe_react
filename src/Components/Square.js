const Square = ({testId, onClick, value, isWinningSquare}) => {
    
    return (
      <button 
          data-testid={testId}
          className={`square ${isWinningSquare ? "winningSquare" : ""}`} 
          onClick={onClick}
          //{props.isWinningSquare?classList.append("highlight"):classList.remove("highlight")}
      >
        {value}
      </button>
    ); 
}

export default Square;