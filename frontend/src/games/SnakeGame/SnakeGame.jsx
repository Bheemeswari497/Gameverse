import { useEffect, useState } from "react";

function SnakeGame() {

  const size = 15;


  const initialSnake = [
    { x: 7, y: 7 },
    { x: 6, y: 7 },
    { x: 5, y: 7 }
  ];


  const [snake, setSnake] = useState(initialSnake);

  const [food, setFood] = useState({
    x: 10,
    y: 8
  });


  const [direction, setDirection] =
    useState({
      x: 1,
      y: 0
    });


  const [score,setScore] = useState(0);

  const [gameOver,setGameOver] = useState(false);



  useEffect(()=>{


    const timer = setInterval(()=>{


      if(gameOver) return;



      setSnake(prev=>{


        const head = {

          x: prev[0].x + direction.x,

          y: prev[0].y + direction.y

        };



        if(

          head.x < 0 ||
          head.y < 0 ||

          head.x >= size ||
          head.y >= size ||

          prev.some(
            part =>
            part.x === head.x &&
            part.y === head.y
          )

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

          setScore(s=>s+1);


          setFood({

            x:Math.floor(Math.random()*size),

            y:Math.floor(Math.random()*size)

          });

        }


        else{

          newSnake.pop();

        }



        return newSnake;


      });



    },200);



    return()=>clearInterval(timer);



  },[direction,food,gameOver]);





  useEffect(()=>{


    function control(e){


      if(e.key==="ArrowUp" && direction.y!==1)

        setDirection({x:0,y:-1});


      if(e.key==="ArrowDown" && direction.y!==-1)

        setDirection({x:0,y:1});


      if(e.key==="ArrowLeft" && direction.x!==1)

        setDirection({x:-1,y:0});


      if(e.key==="ArrowRight" && direction.x!==-1)

        setDirection({x:1,y:0});

    }



    window.addEventListener(
      "keydown",
      control
    );


    return()=>{

      window.removeEventListener(
        "keydown",
        control
      );

    };


  },[direction]);





  function restart(){

    setSnake(initialSnake);

    setDirection({
      x:1,
      y:0
    });


    setFood({
      x:10,
      y:8
    });


    setScore(0);

    setGameOver(false);

  }





  return (

    <div className="game-page">


      <h1>🐍 Snake Game</h1>


      <h2>

      {
        gameOver
        ? "Game Over 💀"
        : `Score : ${score}`
      }

      </h2>



      <div className="snake-board">


      {

      [...Array(size*size)].map((_,index)=>{


        const x=index%size;

        const y=Math.floor(index/size);



        const snakeIndex = snake.findIndex(

          part =>

          part.x===x &&
          part.y===y

        );



        const isFood =

        food.x===x &&
        food.y===y;



        return (

          <div

          key={index}


          className={

            snakeIndex===0

            ? "snake-head cell"

            : snakeIndex>0

            ? "snake-body cell"

            : isFood

            ? "food cell"

            : "cell"

          }

          />


        );


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