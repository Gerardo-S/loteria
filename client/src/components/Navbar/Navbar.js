import { NavLink } from "react-router-dom";
import { useAuth } from "../../util/authContext";

import "../Navbar/Navbar.css";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="nav">
     
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/login"
          activeClassName="nav-link-active"
        >
          Home/Login
        </NavLink>
      )}
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/signup"
          activeClassName="nav-link-active"
        >
          Signup
        </NavLink>
      )}
       <NavLink
        className="nav-link"
        exact
        to="/"
        activeClassName="nav-link-active"
      >
        Game
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="nav-link"
          to="/protected/example"
          activeClassName="nav-link-active"
        >
          Protected
        </NavLink>
      )}
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
export default Navbar;
