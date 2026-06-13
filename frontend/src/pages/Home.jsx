import GameCard from "../components/GameCard";
import gamesData from "../data/gamesData";


function Home() {

  return (

    <div className="home">

      <h1>
        Welcome to GameVerse 🎮
      </h1>

      <p>
        Play • Compete • Level Up
      </p>


      <div className="games">

        {
          gamesData.map((game)=>(

            <GameCard 
              key={game.id}
              game={game}
            />

          ))
        }

      </div>

    </div>

  );

}


export default Home;