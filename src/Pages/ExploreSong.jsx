import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AFUT from "../images/album-covers/afut.png";
import ForEmma from "../images/album-covers/for-emma.png";
import Grace from "../images/album-covers/grace.png";
import PinkMoon from "../images/album-covers/pink-moon.png";
import Rumours from "../images/album-covers/rumours.png";
import TPAB from "../images/album-covers/tpab.png";
import Madvillainy from "../images/album-covers/madvillainy.png";
import TheGlow from "../images/album-covers/the-glow.png";
import Solkongen from "../images/album-covers/solkongen.png";

export default function ExploreSong() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const songs = [
    {
      title: "Concorde",
      artist: "Black Country, New Road",
      genre: "Art Rock",
      image: AFUT,
    },
    {
      title: "Sinny Love",
      artist: "Bon Iver",
      genre: "Indie Folk",
      image: ForEmma,
    },
    {
      title: "Hallelujah",
      artist: "Jeff Buckley",
      genre: "Alternative Rock",
      image: Grace,
    },
    {
      title: "Place To Be",
      artist: "Nick Drake",
      genre: "Contemporary Folk",
      image: PinkMoon,
    },
    {
      title: "Dreams",
      artist: "Fleetwood Mac",
      genre: "Pop Rock",
      image: Rumours,
    },
    {
      title: "King Kunta",
      artist: "Kendrick Lamar",
      genre: "Conscious Hip Hop",
      image: TPAB,
    },
    {
      title: "All Caps",
      artist: "Madvillain",
      genre: "Abstract Hip Hop",
      image: Madvillainy,
    },
    {
      title: "I Felt Your Shape",
      artist: "The Microphones",
      genre: "Indie Folk",
      image: TheGlow,
    },
    {
      title: "Ung Kniv",
      artist: "The Minds of 99",
      genre: "Pop Rock",
      image: Solkongen,
    },
  ];
  return (
    <div className="explore-albums-container">
      <div className="searchbar-container">
        <div className="search-input-container">
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
      <h2>Albums</h2>

      <div className="albums-grid">
        {songs.map((song, index) => (
          <div className="album-card" key={index}>
            <img src={song.image} alt={song.title} className="album-image" />
            <h3>{truncateText(song.title, 14)}</h3>
            <p className="artist-text">{truncateText(song.artist, 20)}</p>
            <p className="genre-text">{song.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
