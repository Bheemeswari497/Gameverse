import { useState } from "react";

function TicTacToe() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const winner = checkWinner(board);

  // Draw checking
  const isDraw = !winner && board.every((box) => box !== null);


  function handleClick(index) {

    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = xTurn ? "X" : "O";

    setBoard(newBoard);
    setXTurn(!xTurn);

  }


  function resetGame() {

    setBoard(Array(9).fill(null));
    setXTurn(true);

  }


  return (

    <div className="game-page">

      <h1>❌ Tic Tac Toe ⭕</h1>


      <h2>
        {
          winner
          ? `Winner 🎉 : ${winner}`
          : isDraw
          ? "Match Draw 🤝"
          : `Turn : ${xTurn ? "X" : "O"}`
        }
      </h2>


      <div className="board">

        {
          board.map((value, index) => (

            <button
              className="box"
              key={index}
              onClick={() => handleClick(index)}
            >

              {value}

            </button>

          ))
        }

      </div>


      <button
        className="reset"
        onClick={resetGame}
      >

        Restart 🔄

      </button>


    </div>

  );

}


function checkWinner(board) {

  const lines = [

    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]

  ];


  for(let line of lines){

    const [a,b,c] = line;


    if(
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ){

      return board[a];

    }

  }


  return null;

}


export default TicTacToe;