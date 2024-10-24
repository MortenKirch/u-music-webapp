import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Explore() {
  return (
    <div className="explore-genres-container">
      <div className="searchbar-container">
        <div className="search-input-container">
          <input type="text" placeholder="Search the library..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>

      <div className="browse-container">
        <h2>Browse by</h2>
        <NavLink to="/explore-artists" className="browse-item">
          Artist
        </NavLink>
        <NavLink to="/explore-genres" className="browse-item">
          Genre
        </NavLink>
        <NavLink to="/explore-albums" className="browse-item">
          Album
        </NavLink>
        <NavLink to="/explore-songs" className="browse-item">
          Song
        </NavLink>
        <NavLink to="/concerts-landing-page" className="browse-item">
          Concerts
        </NavLink>
      </div>
    </div>
  );
}
