import profilePic from "../images/cat.jpg";
import "../App.css";

// artister
import artist1 from "../images/noah-kahan.webp";
import artist2 from "../images/Kendrick-lamar.jpeg";
import artist3 from "../images/Drake.jpeg";
import artist4 from "../images/Eminem.jpeg";

// sange her ville der kun være rap god til at starte med

import sang1 from "../images/Rap god.png";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-header">
          <img src={profilePic} alt="Profile" className="profile-image" />
          <h1 className="profile-name">Pug Fartmeister</h1>
          <div className="followingsection">
            <span className="followers">Followers: 231</span>
            <span className="following">Following: 12</span>
          </div>
          <button className="followme-button">Follow</button>
        </div>
      </div>

      <div className="favorit-sektion-artist">
        <h2>Favorite Artists</h2>
        <div className="artist-favorit">
          <div className="artist-card">
            <img src={artist1} alt="Noah Kahan" className="artist-image" />
            <p>Noah Kahan</p>
          </div>
          <div className="artist-card">
            <img src={artist2} alt="Kendrick Lamar" className="artist-image" />
            <p>Kendrick Lamar</p>
          </div>
          <div className="artist-card">
            <img src={artist3} alt="Drake" className="artist-image" />
            <p>Drake</p>
          </div>
          <div className="artist-card">
            <img src={artist4} alt="Eminem" className="artist-image" />
            <p>Eminem</p>
          </div>
        </div>
      </div>

      <div className="favorit-sange-sektion">
        <h2>Favorite Songs</h2>
        <ul className="sange-list">
          <li className="'sang-card">
            <img src={sang1} alt="rap-god" className="sang-image" />
            <div className="song-details">
              <p className="song-title">Rap God</p>
              <p className="song-time">9:10</p>
              <p className="song-rating">Rating: 5/10</p>
            </div>
          </li>
          <li className="sange-card">
            <img src={sang1} alt="rap-god" className="sang-image" />
            <div className="song-details">
              <p className="song-title">Rap God</p>
              <p className="song-time">9:10</p>
              <p className="song-rating">Rating: 5/10</p>
            </div>
          </li>
          <li className="sange-card">
            <img src={sang1} alt="rap-god" className="sang-image" />
            <div className="song-details">
              <p className="song-title">Rap God</p>
              <p className="song-time">9:10</p>
              <p className="song-rating">Rating: 5/10</p>
            </div>
          </li>
          <li className="sange-card">
            <img src={sang1} alt="rap-god" className="sang-image" />
            <div className="song-details">
              <p className="song-title">Rap God</p>
              <p className="song-time">9:10</p>
              <p className="song-rating">Rating: 5/10</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="favorit-albums">
        <h2>Favorite Albums</h2>
        <ul className="album-list">
          <li>The Eminem Show</li>
          <li>The Eminem Show</li>
        </ul>
      </div>

      <div className="reviews-sektion">
        <h2>Reviews</h2>
        <h2>Ratings</h2>
        <h2>Want to Listen</h2>
        <div className="review-box">
          <h4>Overskrift</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
          <div>Rating 5/10</div>
        </div>
      </div>
    </div>
  );
}
