import { NavLink } from "react-router-dom";
import ActivityIcon from "../images/activity-icon.svg";
import ChartsIcon from "../images/charts-icon.svg";
import HomeIcon from "../images/home-icon.svg";
import ProfileIcon from "../images/profile-icon.svg";
import SearchIcon from "../images/search-icon.svg";

export default function NavBotNavbarBottom() {
  return (
    <nav className="Nav--bar--bottom">
      <NavLink to="/" className="nav--item" activeClassName="active">
        <img src={HomeIcon} alt="Home" />
        Home
      </NavLink>
      <NavLink to="/search" className="nav--item" activeClassName="active">
        <img src={SearchIcon} alt="Search" />
        Search
      </NavLink>
      <NavLink to="/charts" className="nav--item" activeClassName="active">
        <img src={ChartsIcon} alt="Charts" />
        Charts
      </NavLink>
      <NavLink to="/activity" className="nav--item" activeClassName="active">
        <img src={ActivityIcon} alt="Activity" />
        Activity
      </NavLink>
      <NavLink to="/profile" className="nav--item" activeClassName="active">
        <img src={ProfileIcon} alt="Profile" />
        Profile
      </NavLink>
    </nav>
  );
}
