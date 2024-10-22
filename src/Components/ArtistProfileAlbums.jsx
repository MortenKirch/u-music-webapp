import Fuel from "../images/eminem-fuel.png";
import RapGod from "../images/rap-god.png";

export default function ArtistProfileAlbum() {
  return (
    <div className="top-albums-section">
      <h3>Top Albums</h3>
      <div className="album-entry">
        <img src={Fuel} alt="Encore" />
        <div className="album-info">
          <p>Encore</p>
          <p>2009 - Album</p>
          <p>Rating: 8.3/10</p>
        </div>
      </div>
      <div className="album-entry">
        <img src={RapGod} alt="The Eminem Show" />
        <div className="album-info">
          <p>The Eminem Show</p>
          <p>2009 - Album</p>
          <p>Rating: 8.3/10</p>
        </div>
      </div>
    </div>
  );
}
