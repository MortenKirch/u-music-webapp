import Damn from "../images/album-covers/damn.png";
import BlackPanther from "../images/album-covers/black-panther.png";
import GKMC from "../images/album-covers/gkmc.png";

export default function ArtistProfileSongs() {
  const songs = [
    {
      title: "Humble",
      artist: "Kendrick Lamar",
      duration: "2:57",
      rating: "8.3/10",
      image: Damn,
    },
    {
      title: "All The Stars (with SZA)",
      artist: "Kendrick Lamar, SZA",
      duration: "3:52",
      rating: "8.3/10",
      image: BlackPanther,
    },
    {
      title: "Money Trees",
      artist: "Kendrick Lamar",
      duration: "6:26",
      rating: "8.3/10",
      image: GKMC,
    },
    {
      title: "LOVE. FEAT. ZACARI",
      artist: "Kendrick Lamar, Zacari",
      duration: "3:33",
      rating: "8.3/10",
      image: Damn,
    },
  ];

  return (
    <>
      <h2 className="artist-profile-section-title">Top Songs</h2>
      <div className="artist-profile-top-songs">
        {songs.map((song, index) => (
          <div key={index} className="artist-profile-song">
            <img src={song.image} alt="" className="artist-profile-song-img" />
            <div className="artist-profile-song-info">
              <p className="artist-profile-song-title">{song.title}</p>
              <p className="artist-profile-song-artist">{song.artist}</p>
            </div>
            <div className="artist-profile-song-meta">
              <p className="artist-profile-song-duration">{song.duration}</p>
              <p className="artist-profile-song-rating">
                Rating: {song.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
