export default function Notifications() {
  return (
    <>
    <section className="notification-section">
      <h1>Notifications</h1>
      <div className="notification-div">
      <div className="notification-profile-container">
        <img src="../src/images/cat.jpg" alt="billede af user" className="notification-profile-img"/>
        <i>fab icon</i>
      </div>
      <div className="notification-p-text">
        <p>@user liked your review</p>
      </div>
      </div>
      </section>
    </>
  );
}
