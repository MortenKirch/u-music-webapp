import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AFUT from "../images/album-covers/afut.png";
import ForEmma from "../images/album-covers/for-emma.png";
import Grace from "../images/album-covers/grace.png";
import PinkMoon from "../images/album-covers/pink-moon.png";
import Rumours from "../images/album-covers/rumours.png";
import TPAB from "../images/album-covers/tpab.png";
import Madvillainy from "../images/album-covers/madvillainy.png";
import GKMC from "../images/album-covers/gkmc.png";
import Solkongen from "../images/album-covers/solkongen.png";
import { NavLink } from "react-router-dom";

export default function ExploreSong() {
  const songs = [
    {
      title: "Concorde",
      artist: "Black Country, New Road",
      genre: "Art Rock",
      image: AFUT,
    },
    {
      title: "Skinny Love",
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
      image: GKMC,
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
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
      <h2>Songs</h2>

      <div className="explore-albums-grid">
        {songs.map((song, index) => (
          <NavLink
            to="/song/Concorde"
            className="explore-album-card"
            key={index}
          >
            <div className="explore-album-card" key={index}>
              <img
                src={song.image}
                alt={song.title}
                className="explore-album-image"
              />
              <h3>{song.title}</h3>
              <p className="explore-album-artist-text">{song.artist}</p>
              <p className="explore-album-genre-text">{song.genre}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
