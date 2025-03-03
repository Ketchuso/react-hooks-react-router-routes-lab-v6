import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to='/'>
        <h2>Home</h2>
      </NavLink>
      <NavLink to='/directors'>
        <h2>Directors</h2>
      </NavLink>
      <NavLink to='/actors'>
        <h2>Actors</h2>
      </NavLink>
    </nav>
    );
};

export default NavBar;
