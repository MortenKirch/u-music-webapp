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

export default function ExploreAlbums() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const albums = [
    {
      title: "Ants From Up There",
      artist: "Black Country, New Road",
      genre: "Art Rock",
      image: AFUT,
    },
    {
      title: "For Emma, Forever Ago",
      artist: "Bon Iver",
      genre: "Indie Folk",
      image: ForEmma,
    },
    {
      title: "Grace",
      artist: "Jeff Buckley",
      genre: "Alternative Rock",
      image: Grace,
    },
    {
      title: "Pink Moon",
      artist: "Nick Drake",
      genre: "Contemporary Folk",
      image: PinkMoon,
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      genre: "Pop Rock",
      image: Rumours,
    },
    {
      title: "To Pimp A Butterfly",
      artist: "Kendrick Lamar",
      genre: "Conscious Hip Hop",
      image: TPAB,
    },
    {
      title: "Madvillainy",
      artist: "Madvillain",
      genre: "Abstract Hip Hop",
      image: Madvillainy,
    },
    {
      title: "The Glow Pt. 2",
      artist: "The Microphones",
      genre: "Indie Folk",
      image: TheGlow,
    },
    {
      title: "Solkongen",
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
        {albums.map((album, index) => (
          <div className="album-card" key={index}>
            <img src={album.image} alt={album.title} className="album-image" />
            <h3>{truncateText(album.title, 14)}</h3>
            <p className="artist-text">{truncateText(album.artist, 20)}</p>
            <p className="genre-text">{album.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
