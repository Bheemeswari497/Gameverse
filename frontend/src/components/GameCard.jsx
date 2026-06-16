import { Link } from "react-router-dom";


function GameCard({ game }) {

  let gamePath = "#";


  if (game.name === "Tic Tac Toe") {

    gamePath = "/tic-tac-toe";

  }


  if (game.name === "Snake Game") {

    gamePath = "/snake";

  }


  return (

    <div className="card">

      <h2>{game.name}</h2>


      <p>
        🎯 {game.category}
      </p>


      <p>
        ⚡ {game.level}
      </p>


      <Link to={gamePath}>

        <button>
          {
            gamePath === "#"
            ? "Coming Soon 🚀"
            : "Play Now 🎮"
          }
        </button>

      </Link>


    </div>

  );

}


export default GameCard;