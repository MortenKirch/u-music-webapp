import concert from "../images/Eminem tour.jpeg";
import flag from "../images/Flag.png";
import warmup from "../images/eminem-fuel.png";
import warmup2 from "../images/Album1.jpg";
import sangpic from "../images/eminem-fuel.png";
import { useState } from "react";

const setlistSongs = [
  {
    artist: "Eminem",
    title: "Rap God",
    duration: "5:43",
    rating: "9.5/10",
    cover: sangpic,
  },
  {
    artist: "Eminem",
    title: "Lose Yourself",
    duration: "3:31",
    rating: "9.7/10",
    cover: sangpic,
  },
  {
    artist: "Eminem",
    title: "Mockingbird",
    duration: "4:10",
    rating: "5/10",
    cover: sangpic,
  },
  {
    artist: "Eminem",
    title: "Bad Guy",
    duration: "7:14",
    rating: "4/10",
    cover: sangpic,
  },
];

const tourDates = [
  {
    date: "May 31",
    city: "Charlotte, NC",
    location: "PNC Music Pavillion",
  },
  {
    date: "May 28",
    city: "Landover, MD",
    location: "FedEx Field",
  },
  {
    date: "Jun 3",
    city: "Atlanta, GA",
    location: "Mercedes-Benz Stadium",
  },
  {
    date: "Jun 23",
    city: "Charlotte, SC",
    location: "Bank of America Stadium",
  },
  {
    date: "Jul 3",
    city: "Atlanta, GA",
    location: "Mercedes-Benz Stadium",
  },
  {
    date: "Jul 23",
    city: "Atlanta, GA",
    location: "Mercedes-Benz Stadium",
  },
  {
    date: "Jul 31",
    city: "Atlanta, GA",
    location: "Mercedes-Benz Stadium",
  },
];

export default function Concert() {
  const [showFullList, setShowFullList] = useState(false);

  const toggleFullList = () => {
    setShowFullList((prev) => !prev);
  };

  return (
    <>
      <div className="top-sang-container">
        <div className="concert-header-section">
          <img src={concert} alt="Concert Cover" className="concert-cover" />
          <div className="concert-details">
            <h2 className="concert-title">Eminem</h2>
            <p className="concert-data">The Anger Management Tour</p>
            <p className="concert-data">Jul 3 - Oct 10 2024</p>
            <div className="concert-location">
              <span>Location: USA</span>
              <img src={flag} alt="USA Flag" className="concert-flag" />
            </div>
            <a href="#tour-dates" className="concert-date-button">
              See Dates
            </a>
          </div>
        </div>

        <div className="setlist-section">
          <h3 className="setlist-title">Set list</h3>
          <div className="setlist-box">
            {setlistSongs.slice(0, 1).map((song, index) => (
              <div className="setlist-song" key={index}>
                <img src={song.cover} alt="Sang cover" className="sangcovers" />
                <div className="setlist-song-info">
                  <p className="singer-name">{song.artist}</p>
                  <p className="setlist-song-title">{song.title}</p>
                  <p className="setlist-song-data">{song.duration}</p>
                </div>
                <span className="setlist-rating">{song.rating}</span>
              </div>
            ))}
          </div>

          <a href="#" className="see-full-list" onClick={toggleFullList}>
            {showFullList ? "See Less" : "See Full List"}
          </a>

          {showFullList && (
            <div className="full-song-list">
              {setlistSongs.map((song, index) => (
                <div className="setlist-song" key={index}>
                  <img
                    src={song.cover}
                    alt="Sang cover"
                    className="sangcovers"
                  />
                  <div className="setlist-song-info">
                    <p className="singer-name">{song.artist}</p>
                    <p className="setlist-song-title">{song.title}</p>
                    <p className="setlist-song-data">{song.duration}</p>
                  </div>
                  <span className="setlist-rating">{song.rating}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="warmup-section">
          <h3 className="warmup-title">Warmup</h3>
          <div className="warmup-box">
            <div className="warmup-album">
              <img src={warmup} alt="warmup cover" className="warmup-cover" />
              <span className="warmup-name">Five Finger Death Punch</span>
            </div>

            <div className="warmup-album">
              <img src={warmup2} alt="Album Cover" className="warmup-cover" />
              <span className="warmup-name">Ice Nine Kills</span>
            </div>
          </div>
        </div>

        <div className="tourdates-section" id="tour-dates">
          <h3 className="tourdates-title">Tour dates</h3>
          <div className="tourdates-list">
            {tourDates.map((date, index) => (
              <div className="tourdate-box" key={index}>
                <p className="tourdate">
                  {date.date} - {date.city}
                </p>
                <p className="tourlocation">Location: {date.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
