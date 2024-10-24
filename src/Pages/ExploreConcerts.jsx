import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import EminemTour from "../images/concert-posters/eminem-poster.png";
import KendrickTour from "../images/concert-posters/kendrick-poster.png";

export default function ExploreConcerts() {
  const concerts = [
    {
      artist: "Eminem",
      tour: "The Anger Management Tour",
      dates: "Jul 13 - Oct 20 2024",
      location: "Location: USA",
      image: EminemTour,
    },
    {
      artist: "Kendrick Lamar",
      tour: "The Big Steppers Tour 2022",
      dates: "Jul 13 - Oct 20 2024",
      location: "Location: Worldwide",
      image: KendrickTour,
    },
  ];

  return (
    <div className="explore-concerts-container">
      <div className="searchbar-container">
        <div className="search-input-container">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>

      <h1>Concerts near Denmark</h1>
      <button className="change-location">
        Change Location <FontAwesomeIcon icon={faChevronDown} />{" "}
      </button>

      <div className="concerts-list">
        {concerts.map((concert, index) => (
          <div className="concert-card" key={index}>
            <img
              src={concert.image}
              alt={concert.artist}
              className="concert-image"
            />
            <div className="concert-info">
              <h3>{concert.artist}</h3>
              <p className="tour-name">{concert.tour}</p>
              <p className="concert-dates">{concert.dates}</p>
              <p className="concert-location">{concert.location}</p>
              <button className="see-tour-button">See tour</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
