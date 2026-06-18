import { useState } from "react";

function QuizGame() {

  const questions = [

    {
      q:"Which hook manages state?",
      options:["useData","useState","useEffect","useRef"],
      ans:"useState"
    },

    {
      q:"React apps are made using?",
      options:["Components","Tables","Files","Servers"],
      ans:"Components"
    },

    {
      q:"JSX stands for?",
      options:["Java Syntax XML","JavaScript XML","JSON XML","Java XML"],
      ans:"JavaScript XML"
    },

    {
      q:"React is a ____ library?",
      options:["Database","UI","OS","Browser"],
      ans:"UI"
    },

    {
      q:"Which command starts React?",
      options:["npm start","npm run dev","react run","node app"],
      ans:"npm run dev"
    },

    {
      q:"Which creates React project?",
      options:["Vite","Excel","Word","PowerPoint"],
      ans:"Vite"
    }

  ];


  const [index,setIndex] = useState(0);

  const [score,setScore] = useState(0);

  const [selected,setSelected] = useState("");

  const [finish,setFinish] = useState(false);



  function checkAnswer(option){

    setSelected(option);


    if(option === questions[index].ans){

      setScore(score + 1);

    }


    setTimeout(()=>{


      setSelected("");


      if(index + 1 < questions.length){

        setIndex(index + 1);

      }

      else{

        setFinish(true);

      }


    },1000);

  }



  function getClass(option){


    if(selected === "") return "";


    if(option === questions[index].ans){

      return "correct";

    }


    if(option === selected){

      return "wrong";

    }


    return "";

  }



  function restart(){

    setIndex(0);

    setScore(0);

    setSelected("");

    setFinish(false);

  }



  return(

    <div className="game-page">


      <h1>🎯 Quiz Battle</h1>


      {

      finish ?

      <>

      <h2>Score : {score}/{questions.length}</h2>

      <button 
      className="reset"
      onClick={restart}>
      Restart 🔄
      </button>

      </>

      :

      <div className="quiz-box">


      <h2>{questions[index].q}</h2>


      {
        questions[index].options.map((op)=>


        <button

        key={op}

        className={`option-btn ${getClass(op)}`}

        onClick={()=>checkAnswer(op)}

        disabled={selected !== ""}

        >

        {op}

        </button>


        )
      }


      <h3>
      Question {index+1}/{questions.length}
      </h3>


      </div>

      }


    </div>

  );

}


export default QuizGame;