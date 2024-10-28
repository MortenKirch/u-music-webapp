import "../App.css";

import Songcover from "../images/rap-god.png";
import profilePic from "../images/cat.jpg";
import soundcloud from "../images/Sound-icon.png";
import apple from "../images/Apple.png";
import spotify from "../images/Spotify.png";

export default function Song() {
  return (
    <div className="song-container-new">
      <div className="song-header-section-new">
        <img src={Songcover} alt="Rap god" className="song-cover-new" />
        <div className="song-details-new">
          <h1 className="song-title-new">Rap god</h1>
          <p className="song-meta-new">2003</p>
          <p className="song-artist-new">Artist - Eminem</p>
          <p className="song-rating-new">Avg Rating: 3:45</p>
          <div className="music-icons-new">
            <img src={soundcloud} alt="soundcloud" className="icon-new" />
            <img src={apple} alt="apple" className="icon-new" />
            <img src={spotify} alt="spotify" className="icon-new" />
          </div>
        </div>
      </div>
      <div className="lyrics-section-new">
        <h2 className="lyrics-title-new">Lyrics</h2>
        <div className="lyrics-box-new">
          <p className="lyrics-text-new">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <a href="#" className="see-all-lyrics-new">
            See all lyrics
          </a>
        </div>
      </div>
      <h2 className="reviews-title-new">Reviews</h2>
      <div className="reviews-section-new">
        <div className="review-controls-new">
          <p className="sort-by-new">Sort by:</p>
          <p className="sort-option-new">Date</p>
        </div>

        <div className="review-list-new">
          <div className="review-box-new">
            <div className="review-header-new">
              <img
                src={profilePic}
                alt="Profile"
                className="reviewer-pic-new"
              />
              <h4 className="reviewer-name-new">Overskrift</h4>
              <p className="review-date-new">Date: 2024</p>
            </div>
            <div className="review-content-new">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="review-actions-new">
              <p className="review-rating-new">Rating: 3.5/10</p>
              <div className="heart-reply-new">
                <button className="heart-button-new">❤️</button>
                <p className="reply-thread-new">Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
