import NotiIcon from "../images/notification-icon.svg";

export default function NavTop() {
  return (
    <nav className="topnav">
      <ul>
        <ul className="topnav-links">
          <li>Concerts</li>
          <li>Reviews</li>
        </ul>
        <li>
          <img src={NotiIcon} alt="Notification icon" />
        </li>
      </ul>
    </nav>
  );
}
