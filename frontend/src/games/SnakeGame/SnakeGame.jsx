import { useEffect, useState } from "react";

function SnakeGame() {

  const size = 15;

  const [snake, setSnake] = useState([
    { x: 7, y: 7 }
  ]);

  const [food, setFood] = useState({
    x: 5,
    y: 5
  });

  const [direction, setDirection] = useState({
    x: 1,
    y: 0
  });

  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {

    const handleKey = (e) => {

      if(e.key === "ArrowUp")
        setDirection({x:0,y:-1});

      if(e.key === "ArrowDown")
        setDirection({x:0,y:1});

      if(e.key === "ArrowLeft")
        setDirection({x:-1,y:0});

      if(e.key === "ArrowRight")
        setDirection({x:1,y:0});

    };


    window.addEventListener(
      "keydown",
      handleKey
    );


    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );

  }, []);



  useEffect(() => {

    if(gameOver) return;


    const timer = setInterval(() => {

      setSnake(prev => {

        const head = {
          x: prev[0].x + direction.x,
          y: prev[0].y + direction.y
        };


        if(
          head.x < 0 ||
          head.y < 0 ||
          head.x >= size ||
          head.y >= size
        ){
          setGameOver(true);
          return prev;
        }


        let newSnake = [
          head,
          ...prev
        ];


        if(
          head.x === food.x &&
          head.y === food.y
        ){

          setFood({
            x: Math.floor(Math.random()*size),
            y: Math.floor(Math.random()*size)
          });

        }else{

          newSnake.pop();

        }


        return newSnake;

      });


    },300);


    return () =>
      clearInterval(timer);


  },[direction,food,gameOver]);



  function restart(){

    setSnake([
      {x:7,y:7}
    ]);

    setDirection({
      x:1,
      y:0
    });

    setGameOver(false);
  }



  return (

    <div className="game-page">

      <h1>🐍 Snake Game</h1>

      <h2>
        Score : {snake.length-1}
      </h2>


      {gameOver &&
        <h2>Game Over 💀</h2>
      }


      <div className="snake-board">

      {
        [...Array(size*size)].map((_,i)=>{

          const x = i % size;
          const y = Math.floor(i/size);


          const isSnake =
            snake.some(
              s=>s.x===x && s.y===y
            );


          const isFood =
            food.x===x &&
            food.y===y;


          return (

            <div
              key={i}
              className={
                isSnake
                ? "snake"
                : isFood
                ? "food"
                : "cell"
              }
            />

          )

        })
      }

      </div>


      <button 
        className="reset"
        onClick={restart}
      >
        Restart 🔄
      </button>


    </div>

  );

}


export default SnakeGame;