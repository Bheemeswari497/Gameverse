import { Link } from "react-router-dom";


function GameCard({ game }) {

  return (

    <div className="card">


      <h2>{game.name}</h2>


      <p>
        🎯 {game.category}
      </p>


      <p>
        ⚡ {game.level}
      </p>


      <Link to={game.path}>

        <button>
          Play Now 🎮
        </button>

      </Link>


    </div>

  );

}


export default GameCard;