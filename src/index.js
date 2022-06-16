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


  //FIXME: functionality has broken for slicing array of moves when starting from a specific move and eliminating the extras

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <Game/>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
  