import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <div className="card">

      <h2>{game.name}</h2>

      <p>🎯 {game.category}</p>
      <p>⚡ {game.level}</p>

      {
        game.name === "Tic Tac Toe" ? (
          <Link to="/tic-tac-toe">
            <button>
              Play Now 🎮
            </button>
          </Link>
        ) : (
          <button>
            Coming Soon 🚀
          </button>
        )
      }

    </div>
  );
}

export default GameCard;