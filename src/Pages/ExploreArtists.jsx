import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import KendrickLamar from "../images/explore-artists/kendrick-lamar.png";
import Drake from "../images/explore-artists/drake.png";
import Sza from "../images/explore-artists/sza.png";
import TaylorSwift from "../images/explore-artists/taylor-swift.png";
import EdSheeran from "../images/explore-artists/ed-sheeran.png";
import BillieEilish from "../images/explore-artists/billie-eilish.png";
import TheWeeknd from "../images/explore-artists/the-weeknd.png";
import PostMalone from "../images/explore-artists/post-malone.png";
import ArianaGrande from "../images/explore-artists/ariana-grande.png";

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
    <div className="explore-genres-container">
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
