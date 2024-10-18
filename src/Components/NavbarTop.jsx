import NotiIcon from "../images/notification-icon.svg";

export default function NavTop() {
  return (
    <nav className="topnav">
      <ul>
        <li>Concerts</li>
        <li>Reviews</li>
        <li>
          <img src={NotiIcon} alt="Notification icon" />
        </li>
      </ul>
    </nav>
  );
}
