import Spotify from "../images/Spotify.png";
import Soundcloud from "../images/soundcloud.png";
import AppleMusic from "../images/Apple.png";

export default function AlbumHeader({ album }) {
  return (
    <>
      <div className="full-album-header">
        <div className="full-album-header-1">
        
          <h1>{album.name}</h1>
          <img src={album.image} alt={album.name} />
          <div className="streaming-icons">
            <img
              src={Spotify}
              alt="Spotify"
              onClick={() =>
                window.open(
                  "https://open.spotify.com/album/21xp7NdU1ajmO1CX0w2Egd?si=pGagGIuiQj623SFAYjDzBA",
                  "_blank"
                )
              }
            />
            <img
              src={AppleMusic}
              alt="Apple Music"
              onClick={() =>
                window.open(
                  "https://music.apple.com/us/album/ants-from-up-there/1586070259",
                  "_blank"
                )
              }
            />
            <img
              src={Soundcloud}
              alt="Soundcloud"
              onClick={() =>
                window.open(
                  "https://soundcloud.com/blackcountrynewroad/sets/ants-from-up-there",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <div className="full-album-header-2">
          <div>
            <p className="full-album-header-title">Artist</p>
            <p className="full-album-header-description">{album.artist}</p>
          </div>
          <div>
            <p className="full-album-header-title">Release</p>
            <p className="full-album-header-description">{album.release}</p>
          </div>
          <div>
            <p className="full-album-header-title">Average Rating</p>
            <p className="full-album-header-description">{album.avgRating}</p>
          </div>
          <div>
            <p className="full-album-header-title">Genres</p>
            <p className="full-album-header-description">
              {album.genres.join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
