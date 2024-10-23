

// icons

import Songcover from "../images/rap-god.png";
import profilePic from "../images/cat.jpg";
import soundcloud from "../images/Soundcloud.jpg";
import apple from "../images/Apple.png";
import spotify from "../images/Spotify.png";

export default function Song() {
  return (
    <div className="'song-container">
      <div className="song-header-section">
        <img src={Songcover} alt="Rap god" className="song-cover" />
        <div className="song-details">
          <h1 className="song-title">Rap god</h1>
          <p className="song-meta">2003</p>
          <p className="song-artist">Artist - Eminem</p>
          <p className="song-rating">Avg Rating: 3:45</p>
          <div className="music-icons">
            <img src={soundcloud} alt="soundcloud" className="icon" />
            <img src={apple} alt="apple" className="icon" />
            <img src={spotify} alt="spotify" className="icon" />
          </div>
        </div>
      </div>
      <div className="lyrics-section">
        <h2 className="lyrics-title">Lyrics</h2>
        <div className="lyrics-box">
          <p className="lyrics-text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <a href="#" className="see-all-lyrics">
            See all lyrics
          </a>
        </div>
      </div>

      <div className="reviews-section">
        <h2 className="reviews-title">Reviews</h2>
        <div className="review-controls">
          <p className="sort-by">Sort by:</p>
          <p className="sort-option">Date</p>
        </div>

        <div className="review-list">
          <div className="review-box">
            <div className="review-header">
              <img src={profilePic} alt="Profile" className="reviewer-pic" />
            </div>
            <h4 className="reviewer-name">Overskrift</h4>
            <p className="review-date">Date: 2024</p>
          </div>
        </div>
        <div className="review-content">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
        <div className="review-actions">
          <p className="review-rating">Rating: 3.5/10</p>
          <div className="heart-reply">
            <button className="heart-button">❤️</button>
            <p className="reply-thread">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}
