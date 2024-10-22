import profilePic from "../images/cat.jpg";
import "../App.css";

// artister
import artist1 from "../images/noah-kahan.webp";
import artist2 from "../images/Kendrick-lamar.jpeg";
import artist3 from "../images/Drake.jpeg";
import artist4 from "../images/Eminem.jpeg";

// sange her ville der kun være rap god til at starte med

import sang1 from "../images/Rap god.png";

// albums

import album1 from "../images/Album1.jpg";

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
        <h2 className="favorit-songs">Favorite Songs</h2>
        <ul className="sange-list">
          <li className="'sange-card">
            <div className="sang-content">
              <img src={sang1} alt="rap-god" className="sang-image" />

              <p>Rap God</p>
              <div className="song-details">
                <p>9:10</p>
                <p>Rating: 5/10</p>
              </div>
            </div>
          </li>
          <li className="sange-card">
            <div className="sang-content">
              <img src={sang1} alt="rap-god" className="sang-image" />

              <p>Rap God</p>
              <div className="song-details">
                <p>9:10</p>
                <p>Rating: 5/10</p>
              </div>
            </div>
          </li>
          <li className="sange-card">
            <div className="sang-content">
              <img src={sang1} alt="rap-god" className="sang-image" />

              <p>Rap God</p>
              <div className="song-details">
                <p>9:10</p>
                <p>Rating: 5/10</p>
              </div>
            </div>
          </li>
          <li className="sange-card">
            <div className="sang-content">
              <img src={sang1} alt="rap-god" className="sang-image" />

              <p>Rap God</p>
              <div className="song-details">
                <p>9:10</p>
                <p>Rating: 5/10</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="favorit-albums">
        <h2 className="favorit-albums-title">Favorite Albums</h2>
        <ul className="album-list">
          <img src={album1} alt="the eninem show" className="album-image" />
          <li className="Albumnavn">The Eminem Show</li>

          <img src={album1} alt="the eninem show" className="album-image" />
          <li className="albumnavn">The Eminem Show</li>
        </ul>
      </div>

      <div className="reviews-sektion">
        <button>Reviews</button>
        <button>Ratings</button>
        <button>Want to Listen</button>
      </div>
      <div className="review-box">
        <h4>Overskrift</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        <div>Rating 5/10</div>
      </div>
    </div>
  );
}
