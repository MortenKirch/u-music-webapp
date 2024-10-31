import { useState, useEffect } from "react";
// import TPAB from "../images/album-covers/tpab.png";
// import Madvillainy from "../images/album-covers/madvillainy.png";
// import Rumours from "../images/album-covers/rumours.png";
// import placeholder from "../images/cat.jpg";
import { useNavigate } from "react-router-dom";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState({});
  const uid = localStorage.getItem("uid"); // Get UID from local storage
  const [reviews, setReviews] = useState([]);
  const [profileImage, setProfileImage] = useState();

  const [userData, setUserData] = useState(null); // State for user data
  const navigate = useNavigate();

  const [update, setUpdate] = useState(false);
  const forceUpdate = () => setUpdate(!update);

  useEffect(() => {
    async function getProfile() {


      const profileurl = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${reviews.uid}.json`;
      const profileresponse = await fetch(profileurl);
      const profiledata = await profileresponse.json();

      setUserData(profiledata);
    }

    getProfile();
  });

  useEffect(() => {
    async function getReviews() {
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/reviews.json`;
      const response = await fetch(url);
      const data = await response.json();
      const postsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      })); // from object to array
      setReviews(postsArray);
    }
    async function getUserData() {
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${reviews.uid}.json`;

      const response = await fetch(url);
      const userData = await response.json();
      setUserData(userData); // Set the user data
    }

    getUserData();
    getReviews();
  }, [uid, update]);

  const toggleExpandReview = (index) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  function handleCreate(event) {
    event.preventDefault();
    navigate("/ReviewsForm");
  }

  async function handleDelete(id) {
    console.log("Delete post", reviews);

    const confirmDelete = window.confirm(
      `Do you want to delete post, ${reviews.title}?`
    );
    if (confirmDelete) {
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`;
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Post deleted");
        forceUpdate();
        navigate("/Reviews");
      } else {
        console.log("Sorry, something went wrong");
      }
    }
  }

 

  return (
    <section className="reviews-container">
      <h1>Reviews</h1>
      <button className="reviews-form-btn reviews-btn-create" onClick={handleCreate}>Create Review?</button>

      {reviews.map((review, index) => (
        <div
          className={`review-card ${
            expandedReviews[index] ? "expanded" : "collapsed"
          }`}
          key={index}
        >
          <div className="review-header">
            <div className="review-profile">
              <img
                src={userData?.profileImage}
                alt="Profile"
                className="review-profile-image"
              />
              <p className="review-profile-name">{userData?.username}</p>
            </div>
            <div>
              <div className="review-rating">
                <p>{review.date}</p>
                <h3>{review.reviewTitle}</h3>
                <div className="rating-stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`star ${
                        starIndex < review.rating ? "gold" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="main-review">
            <div className="review-album">
              <img
                src={review.image}
                alt={review.album}
                className="review-album-image"
              />
              <div className="review-album-info">
                <h2 className="review-album-title">{review.album}</h2>
                <p className="review-album-year">{review.year}</p>
                <p className="review-artist-name">{review.artist}</p>
                <p className="review-genres">{review.genres}</p>
              </div>
            </div>
            <p className="main-review-text">
              {expandedReviews[index]
                ? review.reviewtext
                : truncateText(review.reviewtext, 250)}
            </p>
          </div>
          <p className="review-likes">
            {review.likes} <FontAwesomeIcon icon={faHeart} />{" "}
          </p>
          <div className="full-review-button-container">
            <button
              className="full-review-button"
              onClick={() => toggleExpandReview(index)}
            >
              {expandedReviews[index] ? "Show Less" : "Full review"}
            </button>
          </div>
          <button
            className="reviews-btn"
            type="submit"
            onClick={() => handleDelete(review.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
}
