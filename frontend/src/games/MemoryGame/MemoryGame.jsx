import { useState } from "react";

function MemoryGame() {

  const emojis = [
    "🔥","🎮","⭐","🚀",
    "💎","⚡","🎯","❤️"
  ];


  const createCards = () =>

    [...emojis,...emojis]
    .sort(()=>Math.random()-0.5)
    .map((emoji,index)=>({

      id:index,
      emoji,
      flipped:false,
      matched:false

    }));



  const [cards,setCards] = useState(createCards());

  const [selected,setSelected] = useState([]);

  const [moves,setMoves] = useState(0);

  const [level,setLevel] = useState(1);

  const [gameOver,setGameOver] = useState(false);



  const moveLimit =
    level === 1 ? 20 :
    level === 2 ? 16 :
    12;



  function flipCard(index){


    if(
      gameOver ||
      cards[index].flipped ||
      cards[index].matched ||
      selected.length===2
    ) return;



    const updated=[...cards];


    updated[index].flipped=true;


    setCards(updated);



    const picked=[...selected,index];

    setSelected(picked);



    if(picked.length===2){


      const newMoves=moves+1;

      setMoves(newMoves);



      setTimeout(()=>{


        const [a,b]=picked;


        const copy=[...updated];



        if(copy[a].emoji===copy[b].emoji){


          copy[a].matched=true;

          copy[b].matched=true;


        }

        else{


          copy[a].flipped=false;

          copy[b].flipped=false;


        }


        setCards(copy);

        setSelected([]);



        if(
          newMoves>=moveLimit &&
          !copy.every(card=>card.matched)
        ){

          setGameOver(true);

        }


      },700);

    }


  }




  function restart(){

    setCards(createCards());

    setMoves(0);

    setSelected([]);

    setGameOver(false);

  }



  function nextLevel(){

    setLevel(level+1);

    setCards(createCards());

    setMoves(0);

    setSelected([]);

  }



  const win = cards.every(card=>card.matched);



  return(

    <div className="game-page">


      <h1>🧠 Memory Game</h1>


      <h2>Level : {level} 🚀</h2>


      <h2>
        Moves : {moves}/{moveLimit}
      </h2>



      {
        win && 
        <h2>🎉 Level Completed 🎉</h2>
      }



      {
        gameOver &&
        <h2>💀 Game Over 💀</h2>
      }




      <div className="memory-board">


        {
          cards.map((card,index)=>(


            <div

              key={card.id}

              className={
                card.flipped || card.matched
                ? "memory-card open"
                :"memory-card"
              }


              onClick={()=>flipCard(index)}

            >


            {
              card.flipped || card.matched
              ? card.emoji
              :"❓"
            }


            </div>


          ))
        }


      </div>



      {
        win ?


        <button 
        className="reset"
        onClick={nextLevel}
        >

        Next Level 🚀

        </button>


        :

        <button
        className="reset"
        onClick={restart}
        >

        Restart 🔄

        </button>


      }



    </div>

  );

}


export default MemoryGame;