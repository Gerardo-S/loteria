import { NavLink } from "react-router-dom";
import { useAuth } from "../../util/authContext";

import "../Navbar/Navbar.css";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="nav">
      <NavLink
        className="nav-link"
        exact
        to="/"
        activeClassName="nav-link-active"
      >
        Home
      </NavLink>
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/login"
          activeClassName="nav-link-active"
        >
          Login
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
