function GameCard({ game }) {
  return (
    <div className="game-card">

      <h2>🎮 {game.name}</h2>

      <p>
        Category: {game.category}
      </p>

      <p>
        Level: {game.level}
      </p>

      <button>
        {game.status}
      </button>

    </div>
  );
}

export default GameCard;