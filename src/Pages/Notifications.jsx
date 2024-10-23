import ticket from "../images/ticket.png"
import heart from "../images/heart.png" 
import profileIcon from "../images/profile-notification.png"
export default function Notifications() {
  return (
    <>
    <section className="notification-section">
      <h1 className="notification-header-margin">Notifications</h1>
      <div className="notification-div">
      <div className="notification-profile-container">
        <img src="../src/images/cat.jpg" alt="billede af user" className="notification-profile-img"/>
        <img src={profileIcon} alt="Icon" className="notification-icons"/>
      </div>
      <div className="notification-p-text">
        <p>@user liked your review</p>
      </div>

      </div>
      <div className="notification-div">
      <div className="notification-profile-container">
        <img src="../src/images/cat.jpg" alt="billede af user" className="notification-profile-img"/>
        <img src={profileIcon} alt="Icon" className="notification-icons"/>
      </div>
      <div className="notification-p-text">
        <p>@user followed you</p>
      </div>

      </div>
      <div className="notification-div">
      <div className="notification-profile-container">
        <img src="../src/images/Drake.jpeg" alt="billede af user" className="notification-profile-img"/>
        <img src={profileIcon} alt="Icon" className="notification-icons"/>
      </div>
      <div className="notification-p-text">
        <p>@artist is comming to Aarhus!</p>
      </div>
      </div>
      </section>
    </>
  );
}
