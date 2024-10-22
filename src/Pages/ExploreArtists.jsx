import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import kendrick from "../images/explore-artists/kendrick-lamar.png";

export default function ExploreArtists() {
  const artists = [
    { name: "Kendrick Lamar", image: { kendrick } },
    { name: "Drake", image: "path_to_drake_image" },
    { name: "SZA", image: "path_to_sza_image" },
    { name: "Taylor Swift", image: "path_to_taylor_image" },
    { name: "Ed Sheeran", image: "path_to_ed_image" },
    { name: "Billie Eilish", image: "path_to_billie_image" },
    { name: "The Weeknd", image: "path_to_weeknd_image" },
    { name: "Post Malone", image: "path_to_post_image" },
    { name: "Ariana Grande", image: "path_to_ariana_image" },
  ];
  return (
    <div className="artist-explore-container">
      <div className="searchbar-container">
        <div className="search-input-container">
          <input type="text" placeholder="Search the library..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
      <h2>Artists</h2>

      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div className="artist-card" key={index}>
            <img
              src={artist.image}
              alt={artist.name}
              className="artist-image"
            />
            <h3>{artist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
