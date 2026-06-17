import { Link } from "react-router-dom";

function GameCard({ game }) {

  let path = "";

  if (game.name === "Tic Tac Toe") {
    path = "/tic-tac-toe";
  }

  else if (game.name === "Snake Game") {
    path = "/snake";
  }

  else if (game.name === "Memory Game") {
    path = "/memory";
  }


  return (

    <div className="card">

      <h2>{game.name}</h2>

      <p>🎯 {game.category}</p>

      <p>⚡ {game.level}</p>


      <Link to={path}>

        <button>
          Play Now 🎮
        </button>

      </Link>


    </div>

  );

}

export default GameCard;