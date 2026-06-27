import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav>

      <h2>🎮 GameVerse</h2>

      <div className="links">

        <Link to="/">
          Home
        </Link>

        <Link to="/">
          Games
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/login">
          Login
        </Link>

      </div>

    </nav>

  );

}

export default Navbar;