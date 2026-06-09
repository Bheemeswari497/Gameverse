import gamesData from "../data/gamesData";
import GameCard from "../components/GameCard";


function Home(){

return (

<div>

<h1>
🎮 Welcome to GameVerse
</h1>

<p>
Play • Learn • Compete
</p>


{
gamesData.map((game)=>(
<GameCard 
key={game.id}
game={game}
/>
))
}


</div>

)

}

export default Home;