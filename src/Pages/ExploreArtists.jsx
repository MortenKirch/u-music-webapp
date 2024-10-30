import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import KendrickLamar from "../images/artist-image/kendrick-lamar.png";
import Drake from "../images/artist-image/drake.png";
import Sza from "../images/artist-image/sza.png";
import TaylorSwift from "../images/artist-image/taylor-swift.png";
import EdSheeran from "../images/artist-image/ed-sheeran.png";
import BillieEilish from "../images/artist-image/billie-eilish.png";
import TheWeeknd from "../images/artist-image/the-weeknd.png";
import PostMalone from "../images/artist-image/post-malone.png";
import ArianaGrande from "../images/artist-image/ariana-grande.png";

export default function ExploreArtists() {
  const artists = [
    { name: "Kendrick Lamar", image: KendrickLamar },
    { name: "Drake", image: Drake },
    { name: "SZA", image: Sza },
    { name: "Taylor Swift", image: TaylorSwift },
    { name: "Ed Sheeran", image: EdSheeran },
    { name: "Billie Eilish", image: BillieEilish },
    { name: "The Weeknd", image: TheWeeknd },
    { name: "Post Malone", image: PostMalone },
    { name: "Ariana Grande", image: ArianaGrande },
  ];
  return (
    <div className="explore-artists-container">
      <div className="searchbar-container">
        <div className="search-input-container">
          <input
            className="searchbar-input"
            type="text"
            placeholder="Search the library..."
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
      <h1>Artists</h1>

      <div className="explore-artists-grid">
        {artists.map((artist, index) => (
          <div className="explore-artists-card" key={index}>
            <NavLink to="/artist-profile" className="artist-link">
              <img
                src={artist.image}
                alt={artist.name}
                className="explore-artists-image"
              />
              <h3>{artist.name}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
