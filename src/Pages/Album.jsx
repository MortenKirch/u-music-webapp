import "../App.css";

// Import album cover and music icons
import albumcover from "../images/to-pimp-a-butterfly.png";
import soundcloud from "../images/Soundcloud.jpg";
import apple from "../images/Apple.png";
import spotify from "../images/Spotify.png";

export default function Album() {
  return (
    <div className="album-display-section">
      <div className="album-header-info">
        <img
          src={albumcover}
          alt="to-pimp-a-butterfly-album"
          className="album-cover"
        />
        <div className="album-details-info">
          <h1 className="album-title-heading">To Pimp A Butterfly</h1>
          <p className="album-meta">Avg Rating: 3.45</p>
          <div className="music-icons">
            <img src={soundcloud} alt="soundcloud" className="icon" />
            <img src={apple} alt="apple" className="icon" />
            <img src={spotify} alt="spotify" className="icon" />
          </div>
        </div>
      </div>

      <div className="songs-section-album">
        <h2 className="songs-title-header">Songs</h2>
        <ul className="songs-list-items">
          {/* Song 1 */}
          <li className="song-row-item">
            <img
              src={albumcover}
              alt="Wesley's Theory"
              className="song-cover"
            />
            <div className="song-info-text">
              <p className="song-title">Wesley's Theory</p>
              <p className="singer-name-text">Kendrick Lamar</p>
            </div>
            <div className="song-details-info">
              <p>4:47</p>
              <p>Rating: 3.5/10</p>
            </div>
          </li>

          <li className="song-row-item">
            <img
              src={albumcover}
              alt="For Free? (Interlude)"
              className="song-cover"
            />
            <div className="song-info-text">
              <p className="song-title">For Free? (Interlude)</p>
              <p className="singer-name-text">Kendrick Lamar</p>
            </div>
            <div className="song-details-info">
              <p>2:10</p>
              <p>Rating: 4.0/10</p>
            </div>
          </li>

          <li className="song-row-item">
            <img src={albumcover} alt="King Kunta" className="song-cover" />
            <div className="song-info-text">
              <p className="song-title">King Kunta</p>
              <p className="singer-name-text">Kendrick Lamar</p>
            </div>
            <div className="song-details-info">
              <p>3:54</p>
              <p>Rating: 4.7/10</p>
            </div>
          </li>

          <li className="song-row-item">
            <img
              src={albumcover}
              alt="Institutionalized"
              className="song-cover"
            />
            <div className="song-info-text">
              <p className="song-title">Institutionalized</p>
              <p className="singer-name-text">Kendrick Lamar</p>
            </div>
            <div className="song-details-info">
              <p>4:31</p>
              <p>Rating: 4.6/10</p>
            </div>
          </li>

          <li className="song-row-item">
            <img src={albumcover} alt="These Walls" className="song-cover" />
            <div className="song-info-text">
              <p className="song-title">These Walls</p>
              <p className="singer-name-text">Kendrick Lamar</p>
            </div>
            <div className="song-details-info">
              <p>5:00</p>
              <p>Rating: 4.8/10</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
