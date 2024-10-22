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
        <div>
          <img src={HomeIcon} alt="Home" />
          <p>Home</p>
        </div>
      </NavLink>
      <NavLink to="/Explore" className="nav--item" activeClassName="active">
        <div>
          <img src={SearchIcon} alt="Search" />
          <p>Search</p>
        </div>
      </NavLink>
      <NavLink to="/charts" className="nav--item" activeClassName="active">
        <div>
          <img src={ChartsIcon} alt="Charts" />
          <p>Charts</p>
        </div>
      </NavLink>
      <NavLink to="/activity" className="nav--item" activeClassName="active">
        <div>
          <img src={ActivityIcon} alt="Activity" />
          <p>Activity</p>
        </div>
      </NavLink>
      <NavLink to="/profile" className="nav--item" activeClassName="active">
        <div>
          <img src={ProfileIcon} alt="Profile" />
          <p>Profile</p>
        </div>
      </NavLink>
    </nav>
  );
}
