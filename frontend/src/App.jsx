import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";


import TicTacToe from "./games/TicTacToe/TicTacToe";
import SnakeGame from "./games/SnakeGame/SnakeGame";
import MemoryGame from "./games/MemoryGame/MemoryGame";
import QuizGame from "./games/QuizGame/QuizGame";

import "./styles/App.css";


function App() {
  return (

    <BrowserRouter>

      <Navbar />


      <Routes>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
            path="/profile"
            element={<Profile />}
           />
        <Route
            path="/dashboard"
            element={<Dashboard />}
        />

        <Route 
          path="/tic-tac-toe" 
          element={<TicTacToe />} 
        />


        <Route 
          path="/snake" 
          element={<SnakeGame />} 
        />
        
        <Route 
          path="/memory"
          element={<MemoryGame />}
        />
        <Route 
            path="/quiz"
          element={<QuizGame />}
        />

        <Route 
          path="/login" 
          element={<Login />} 
        />
        

      </Routes>


      <Footer />

    </BrowserRouter>

  );
}


export default App;