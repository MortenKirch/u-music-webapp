import React from "react";
import Spotify from "../images/Spotify.png";
import Soundcloud from "../images/soundcloud.png";
import AppleMusic from "../images/Apple.png";

export default function SongHeader({ song }) {
  return (
    <div className="song-header">
      <div className="song-header-1">
        <p className="song-header-title">Title</p>
        <img src={song.image} alt={song.title} className="song-foto" />
      </div>

      <div className="song-header-2">
        <div>
          <p className="song-header-title">Artist</p>
          <p className="song-header-description">{song.artist}</p>
        </div>
        <div>
          <p className="song-header-title">Release</p>
          <p className="song-header-description">{song.releaseDate}</p>
        </div>
        <div>
          <p className="song-header-title">Average Rating</p>
          <p className="song-header-description">{song.avgRating}</p>
        </div>
        <div>
          <p className="song-header-title">Genre</p>
          <p className="song-header-description">{song.genre}</p>
        </div>

        {/* Streaming Icons */}
        <div className="streaming-icons">
          <img
            src={Spotify}
            alt="Spotify"
            onClick={() =>
              window.open(
                "https://open.spotify.com/track/4ShVovnLIlObG43vwaCRkJ",
                "_blank"
              )
            }
          />
          <img
            src={AppleMusic}
            alt="Apple Music"
            onClick={() =>
              window.open(
                "https://music.apple.com/in/song/basketball-shoes/1586070269",
                "_blank"
              )
            }
          />
          <img
            src={Soundcloud}
            alt="Soundcloud"
            onClick={() =>
              window.open(
                "https://soundcloud.com/blackcountrynewroad/basketball-shoes",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
