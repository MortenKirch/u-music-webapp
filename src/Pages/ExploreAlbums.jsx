import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import AFUT from "../images/album-covers/afut.png";
import ForEmma from "../images/album-covers/for-emma.png";
import Grace from "../images/album-covers/grace.png";
import PinkMoon from "../images/album-covers/pink-moon.png";
import Rumours from "../images/album-covers/rumours.png";
import TPAB from "../images/album-covers/tpab.png";
import Madvillainy from "../images/album-covers/madvillainy.png";
import Solkongen from "../images/album-covers/solkongen.png";
import GKMC from "../images/album-covers/gkmc.png";

export default function ExploreAlbums() {
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
      title: "good kid, m.A.A.d city",
      artist: "Kendrick Lamar",
      genre: "West Coast Hip Hop",
      image: GKMC,
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

      <div className="explore-albums-grid">
        {albums.map((album, index) => (
          <NavLink to="/album" className="explore-album-card" key={index}>
            <div className="explore-album-card" key={index}>
              <img
                src={album.image}
                alt={album.title}
                className="explore-album-image"
              />
              <h3>{album.title}</h3>
              <p className="explore-album-artist-text">{album.artist}</p>
              <p className="explore-album-genre-text">{album.genre}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
