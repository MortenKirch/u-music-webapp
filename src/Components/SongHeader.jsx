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
        <h1>{song.title}</h1>
        <h2>{song.artist}</h2>
        <p>Genre: {song.genre}</p>
        <div className="'streaming-icons">
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
