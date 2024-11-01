import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



export default function HomeNews() {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getReviews() {
      const url =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/reviews.json";
      const response = await fetch(url);
      const data = await response.json();
      const reviewsArray = Object.keys(data).map((key) => ({
        id: key,
        name: key,
        ...data[key],
      })); // from object to array
      setReviews(reviewsArray);
    }
    getReviews();
  }, []);

  return (
    <section className="home-recommended-section">
      <h2>Latest Reviews</h2>
      <div className="homepage-albums-slider">
        {reviews.map((review) => (
          <div className="homepage-albums-card" key={review.id}>
      <div className="album-card">
        <img src={`${review.image}`} alt={review.artist} />
        <div className="album-info">
          <p>Album</p>
          <h3>{review.album}</h3>
          <p>{review.year}</p>
          <p>{review.genres}</p>
          <div  className="review-homepage">
          <img src={review.profileImage} alt={review.profileName} className="review-profile-img" />
          <h3>{review.rating}/5</h3>
          </div>
          <a onClick={()=>{
            navigate("/reviews")
          }} className="review-ancor">See Review</a>
        
        </div>

      </div>
          </div>
        ))}
      </div>
    </section>
  );
}
