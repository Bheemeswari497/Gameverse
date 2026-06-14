import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import TicTacToe from "./games/TicTacToe/TicTacToe";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route 
          path="/tic-tac-toe" 
          element={<TicTacToe />} 
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