import placeholder from "../images/cat.jpg";
import Madvillainy from "../images/album-covers/madvillainy.png";

export default function Activity() {
  const activities = [
    {
      id: 1,
      user: "Rune",
      profilePic: placeholder,
      action: "liked",
      targetUser: "@Morten",
      item: "review of The Eminem Show",
    },
    {
      id: 2,
      user: "Morten",
      profilePic: placeholder,
      action: "listened to",
      item: "Madvillainy",
      albumCover: Madvillainy,
      rating: 5,
      review: "this album good asl",
    },
    {
      id: 3,
      user: "Rune",
      profilePic: placeholder,
      action: "rated",
      item: "The Eminem Show",
      rating: 3,
    },
    {
      id: 4,
      user: "Morten",
      profilePic: placeholder,
      action: "added",
      item: "The Eminem Show",
      type: "Favorite albums",
    },
    {
      id: 5,
      user: "Morten",
      profilePic: placeholder,
      action: "saw",
      item: "The Big Steppers Tour (Copenhagen)",
      rating: 4,
    },
    {
      id: 6,
      user: "Rune",
      profilePic: placeholder,
      action: "added",
      item: "Madvillainy",
      type: "Want to listen",
    },
  ];

  return (
    <div className="activity-page">
      <div className="activity-tabs">
        <button className="activity-tab active">Friends</button>
        <button className="activity-tab">You</button>
      </div>

      <div className="activity-feed">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="profile-pic">
              <img src={activity.profilePic} alt={activity.user} />
            </div>
            <div className="activity-content">
              <div className="activity-text-and-stars">
                <p>
                  @{activity.user} {activity.action}{" "}
                  {activity.targetUser ? `${activity.targetUser}'s` : ""}{" "}
                  <strong>{activity.item}</strong>
                  {activity.type && ` to "${activity.type}" `}
                </p>
                {activity.rating && (
                  <div className="activity-rating-stars">
                    {"★".repeat(activity.rating)}
                    {"☆".repeat(5 - activity.rating)}
                  </div>
                )}
              </div>

              {activity.review && (
                <div className="activity-review">
                  <img
                    src={activity.albumCover}
                    alt={activity.item}
                    className="album-cover"
                  />
                  <p>{activity.review}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
