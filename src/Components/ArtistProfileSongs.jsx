import Fuel from "../images/eminem-fuel.png";
import RapGod from "../images/rap-god.png";
import SomebodySaveMe from "../images/eminem-sombody-save-me.png";
import Houdini from "../images/eminem-houdini.png";

export default function ArtistProfileSongs() {
  const songs = [
    {
      title: "Fuel",
      artist: "Eminem, JID",
      duration: "3:43",
      rating: "8.3/10",
      image: Fuel,
    },
    {
      title: "Rap God",
      artist: "Eminem, JuiceWrld",
      duration: "3:43",
      rating: "8.3/10",
      image: RapGod,
    },
    {
      title: "Rap God",
      artist: "Eminem, JuiceWrld",
      duration: "3:43",
      rating: "8.3/10",
      image: SomebodySaveMe,
    },
    {
      title: "Rap God",
      artist: "Eminem, JuiceWrld",
      duration: "3:43",
      rating: "8.3/10",
      image: Houdini,
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
