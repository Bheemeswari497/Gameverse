function RecentGames() {

  const games = [
    "🎯 Tic Tac Toe",
    "🐍 Snake Game",
    "🧠 Memory Game",
    "❓ Quiz Battle"
  ];

  return (

    <div className="recent-games">

      <h2>Recent Games</h2>

      {games.map((game, index) => (

        <div key={index} className="recent-card">
          {game}
        </div>

      ))}

    </div>

  );

}

export default RecentGames;