import { useState, useEffect } from "react";
// import TPAB from "../images/album-covers/tpab.png";
// import Madvillainy from "../images/album-covers/madvillainy.png";
// import Rumours from "../images/album-covers/rumours.png";
// import placeholder from "../images/cat.jpg";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
  const [expandedReviews, setExpandedReviews] = useState({});
  const uid = localStorage.getItem("uid"); // Get UID from local storage
  const [reviews, setReviews] = useState([]);
  const [userData, setUserData] = useState(null); // State for user data

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
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`;

      const response = await fetch(url);
      const userData = await response.json();
      setUserData(userData); // Set the user data
    }

    getUserData();
    getReviews();
  }, [uid]);

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

  // const reviews = [
  //   {
  //     reviewTitle: "Is this the peak of hip hop?",
  //     date: "20/4/2024",
  //     rating: 5,
  //     profileName: "Pug Fartmeister",
  //     album: "To Pimp A Butterfly",
  //     artist: "Kendrick Lamar",
  //     year: "2015",
  //     genres: "Conscious Hip Hop, West Coast Hip Hop, Jazz Rap",
  //     review:
  //       "This album can only be described as perfect. The mixing, instrumentation, and vocal performances are astounding. Every time I come back to this masterpiece I always pick up on something new. The approach that Kendrick takes on struggles of the BLM movement and living in the US as a person of color is well depicted and has changed the way I think about the issues. I could revisit every track on this album individually, the standouts for me are: The opener 'Wesley's Theory' George Clinton and Thundercat add greatly to the psychedelic funk feel of the opener with the ending flows greatly into 'For Free','King Kunta' has a more simple feeling but still does a great job in its instrumentation and vocals, 'Alright' is my personal favorite single from the album I love how Kendrick raps over Pharrell's beat especially the bridge of the song with a great transition into the second interlude of the album. This album deserves all the praise it gets; you can really tell Kendrick worked hard to perfect this album as every song is a 10/10.",
  //     likes: 204,
  //     image: TPAB,
  //     profileImage: placeholder,
  //   },
  //   {
  //     reviewTitle: "Trippin' off the beat kinda",
  //     date: "10/4/2024",
  //     rating: 4,
  //     profileName: "Pug Fartmeister",
  //     album: "Madvillainy",
  //     artist: "Madvillain",
  //     year: "2004",
  //     genres: "Abstract Hip Hop",
  //     review:
  //       "Madvillainy is a truly relevatory album. Really a unique work with it's short tracks and innovative production. Madlib is a freaking awesome producer, going above and beyond what's normally expected from the men behind the boards. MF DOOM also has a hayday. His wordplay is exceptional. That, combined with his deadpan delivery and great flow, makes a match for the ridiculous beats he'd been supplied with. The seminal hip hop release of the decade as far as I know.",
  //     likes: 9999,
  //     image: Madvillainy,
  //     profileImage: placeholder,
  //   },
  //   {
  //     reviewTitle: "This album has no enemies",
  //     date: "3/1/2024",
  //     rating: 4,
  //     profileName: "Pug Fartmeister",
  //     album: "Rumours",
  //     artist: "Fleetwood Mac",
  //     year: "1977",
  //     genres: "Pop Rock, Soft Rock",
  //     review: "Probably the least offensive album ever released.",
  //     likes: 20,
  //     image: Rumours,
  //     profileImage: placeholder,
  //   },
  // ];

  return (
    <section className="reviews-container">
      <h1>Reviews</h1>
      <button>Create Review, skal nok flyttes?</button>

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
                src={review.profileImage}
                alt="Profile"
                className="review-profile-image"
              />
              <p className="review-profile-name">{review.profileName}</p>
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
                  ? review.review
                  : truncateText(review.review, 250)}
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
          <button>Update, skal måske flyttes?</button>
        </div>
      ))}
    </section>
  );
}
