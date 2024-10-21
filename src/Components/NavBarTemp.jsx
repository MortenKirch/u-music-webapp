import { NavLink } from "react-router-dom";

export default function NavBarTemp() {
  return (
    <nav className="tempnav">
      <p>
        Login link er her!!!:<NavLink to="/login">Login</NavLink>
      </p>
    </nav>
  );
}
