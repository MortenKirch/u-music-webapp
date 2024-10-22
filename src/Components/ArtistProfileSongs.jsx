import Fuel from "../images/eminem-fuel.png";
import RapGod from "../images/rap-god.png";
import SomebodySaveMe from "../images/eminem-sombody-save-me.png";
import Houdini from "../images/eminem-houdini.png";

export default function ArtistProfileSongs() {
  return (
    <div className="top-songs-section">
      <h3>Top Songs</h3>
      <div className="song-entry">
        <img src={Fuel} alt="Fuel" />
        <div className="song-info">
          <p>Fuel</p>
          <p>Eminem, JID</p>
        </div>
        <div className="song-details">
          <p>3:43</p>
          <p>Rating: 8.3/10</p>
        </div>
      </div>
      <div className="song-entry">
        <img src={RapGod} alt="Rap God" />
        <div className="song-info">
          <p>Rap God</p>
          <p>Eminem, JuiceWrld</p>
        </div>
        <div className="song-details">
          <p>3:43</p>
          <p>Rating: 8.3/10</p>
        </div>
      </div>
      <div className="song-entry">
        <img src={SomebodySaveMe} alt="Some body save me" />
        <div className="song-info">
          <p>Somebody save me</p>
          <p>Eminem, Jelly roll</p>
        </div>
        <div className="song-details">
          <p>3:50</p>
          <p>Rating: 8.6/10</p>
        </div>
      </div>
      <div className="song-entry">
        <img src={Houdini} alt="Rap God" />
        <div className="song-info">
          <p>Houdini</p>
          <p>Eminem</p>
        </div>
        <div className="song-details">
          <p>3:47</p>
          <p>Rating: 9.1/10</p>
        </div>
      </div>
    </div>
  );
}
