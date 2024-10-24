import TPAB from "../images/album-covers/tpab.png"; // Example album images
import Madvillainy from "../images/album-covers/madvillainy.png";
import Rumours from "../images/album-covers/rumours.png";
import placeholder from "../images/cat.jpg";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Reviews() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

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
      review:
        "This album can only be described as perfect. The mixing, instrumentation, and vocal performances are astounding. Every time I come back to this masterpiece I always pick up on something new. The approach that Kendrick takes on struggles of the BLM movement and living in the US as a person of color is well depicted and has changed the way I think about the issues. I could revisit every track on this album individually, the standouts for me are: The opener 'Wesley's Theory' George Clinton and Thundercat add greatly to the psychedelic funk feel of the opener with the ending flows greatly into 'For Free','King Kunta' has a more simple feeling but still dose a great job in its instrumentation and vocals, 'Alrigh' is my personal favorite single from the album I love how Kendrick raps over Pharells beat especially the bridge of the song with a great transition into the second interlude of the album. This album deserves all the praise it gets you can really tell Kendrick worked hard to perfect this album as every song is a 10/10.",
      likes: 204,
      image: TPAB,
      profileImage: placeholder,
    },
    {
      reviewTitle: "Is this the peak of hip hop?",
      date: "20/4",
      rating: 5,
      profileName: "Pug Fartmeister",
      album: "To Pimp A Butterfly",
      artist: "Kendrick Lamar",
      year: "2015",
      genres: "Conscious Hip Hop, West Coast Hip Hop, Jazz Rap",
      review:
        "This album can only be described as perfect. The mixing, instrumentation, and vocal performances are astounding. Every time I come back to this masterpiece I always pick up on something new. The approach that Kendrick takes on struggles of the BLM movement and living in the US as a person of color is well depicted and has changed the way I think about the issues. I could revisit every track on this album individually, the standouts for me are: The opener 'Wesley's Theory' George Clinton and Thundercat add greatly to the psychedelic funk feel of the opener with the ending flows greatly into 'For Free','King Kunta' has a more simple feeling but still dose a great job in its instrumentation and vocals, 'Alrigh' is my personal favorite single from the album I love how Kendrick raps over Pharells beat especially the bridge of the song with a great transition into the second interlude of the album. This album deserves all the praise it gets you can really tell Kendrick worked hard to perfect this album as every song is a 10/10.",
      likes: 204,
      image: Madvillainy,
      profileImage: placeholder,
    },
    {
      reviewTitle: "Is this the peak of hip hop?",
      date: "20/4",
      rating: 5,
      profileName: "Pug Fartmeister",
      album: "To Pimp A Butterfly",
      artist: "Kendrick Lamar",
      year: "2015",
      genres: "Conscious Hip Hop, West Coast Hip Hop, Jazz Rap",
      review:
        "This album can only be described as perfect. The mixing, instrumentation, and vocal performances are astounding. Every time I come back to this masterpiece I always pick up on something new. The approach that Kendrick takes on struggles of the BLM movement and living in the US as a person of color is well depicted and has changed the way I think about the issues. I could revisit every track on this album individually, the standouts for me are: The opener 'Wesley's Theory' George Clinton and Thundercat add greatly to the psychedelic funk feel of the opener with the ending flows greatly into 'For Free','King Kunta' has a more simple feeling but still dose a great job in its instrumentation and vocals, 'Alrigh' is my personal favorite single from the album I love how Kendrick raps over Pharells beat especially the bridge of the song with a great transition into the second interlude of the album. This album deserves all the praise it gets you can really tell Kendrick worked hard to perfect this album as every song is a 10/10.",
      likes: 204,
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
              <p className="review-genres">{review.genres}</p>
            </div>
            <div className="main-review-text">
              <p>{truncateText(review.review, 250)}</p>
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
