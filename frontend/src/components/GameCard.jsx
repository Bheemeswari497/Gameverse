function GameCard({game}){

return(

<div className="card">

<h2>{game.name}</h2>

<p>
🎯 {game.category}
</p>

<p>
⚡ {game.level}
</p>

<button>
Play Soon 🚀
</button>

</div>

)

}

export default GameCard;