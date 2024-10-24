import NotiIcon from "../images/notification-icon.svg";
import { NavLink } from "react-router-dom";

export default function NavTop() {
  return (
    <div className="top-nav">
      <div className="nav-links">
        <NavLink to="/concerts-landing-page">Concerts</NavLink>
        <NavLink to="/Reviews">Reviews</NavLink>
      </div>
      <div className="notifications">
        <NavLink to="/Notifications">
          <img src={NotiIcon} alt="" />
        </NavLink>
        <span className="notification-dot"></span>
      </div>
    </div>
  );
}
