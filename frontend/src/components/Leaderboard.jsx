function Leaderboard() {


const players = [

{
 name:"Alex",
 game:"Snake",
 score:120
},

{
 name:"John",
 game:"Quiz",
 score:90
},

{
 name:"Emma",
 game:"Memory",
 score:80
},

{
 name:"You",
 game:"Tic Tac Toe",
 score:70
}

];


return(

<div className="leaderboard">


<h1>🏆 Leaderboard</h1>


{

players.map((player,index)=>(


<div className="rank-card" key={index}>


<h2>
#{index+1} {player.name}
</h2>


<p>
🎮 {player.game}
</p>


<p>
⭐ Score : {player.score}
</p>


</div>


))

}


</div>


);


}


export default Leaderboard;