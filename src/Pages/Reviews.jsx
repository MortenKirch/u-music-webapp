import TPAB from "../images/album-covers/tpab.png"; // Example album images
import Madvillainy from "../images/album-covers/madvillainy.png";
import Rumours from "../images/album-covers/rumours.png";
import placeholder from "../images/cat.jpg";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
  const reviews = [
    {
      reviewTitle: "Is this the peak of hip hop?",
      date: "20/4",
      rating: 5,
      profileName: "Pug Fartmeister",
      album: "To Pimp A Butterfly",
      artist: "Kendrick Lamar",
      year: "2015",
      genres: "Conscious Hip Hop, West Coast Hip Hop, Jazz Rap",
      likes: 204,
      image: TPAB,
      profileImage: placeholder,
    },
    {
      reviewTitle: "Overskrift",
      date: "21/4",
      rating: 4,
      profileName: "Pug Fartmeister",
      album: "Eminem - The Eminem Show",
      likes: 150,
      image: Madvillainy,
      profileImage: placeholder,
    },
    {
      reviewTitle: "Overskrift",
      date: "22/4",
      rating: 4,
      profileName: "Pug Fartmeister",
      album: "Eminem - The Eminem Show",
      likes: 100,
      image: Rumours,
      profileImage: placeholder,
    },
  ];

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>

      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="review-header">
            <div className="review-profile">
              <img
                src={review.profileImage}
                alt="Profile"
                className="review-profile-image"
              />
              <p className="review-profile-name">{review.profileName}</p>
            </div>
            <div>
              <h3>{review.reviewTitle}</h3>
              <div className="review-rating">
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
          <div className="main-review">
            <div className="review-album">
              <img
                src={review.image}
                alt={review.album}
                className="review-album-image"
              />
              <h2 className="review-album-title">{review.album}</h2>
              <p className="review-album-year">{review.year}</p>
              <p className="review-artist-name">{review.artist}</p>
              <ul>
                <li className="review-genres">{review.genres}</li>
              </ul>
            </div>
            <div className="main-review-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              quasi similique molestias, enim dicta odit provident omnis veniam
              consequatur maxime, optio incidunt nobis dolor consequuntur?
              Laborum quis distinctio tempore dignissimos.
            </div>
          </div>
          <p className="review-likes">
            {review.likes} <FontAwesomeIcon icon={faHeart} />{" "}
          </p>
          <div className="full-review-button-container">
            <button className="full-review-button">Full review</button>
          </div>
        </div>
      ))}
    </div>
  );
}
