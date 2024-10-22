import React from "react";

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
          <li className="song-row-item">
            <div className="song-info-text">
              <p className="singer-name-text">Kendrick Lamar</p>
            </div>
            <div className="song-details-info">
              <p>3:43</p>
              <p>Rating: 3.5/10</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
