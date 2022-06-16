const Square = (props) => {
    
    return (
      <button 
          className="square" 
          onClick={props.onClick}
          //{props.isWinningSquare?classList.append("highlight"):classList.remove("highlight")}
      >
        {props.value}
      </button>
    ); 
}

export default Square;