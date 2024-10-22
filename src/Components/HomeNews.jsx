import charlixcx from "../images/charli-xcx.png";
import nisemono from "../images/nisemono.png";
import rapgod from "../images/rap-god.png";

export default function HomeNews() {
  return (
    <section className="new-from-friends-section">
      <h2>New from friends</h2>
      <div className="albums-grid">
        <div className="album-card">
          <img src={charlixcx} alt="The Eminem Show" />
          <div className="album-info">
            <p>Album</p>
            <h3>The Eminem Show</h3>
            <p>2009 - Album</p>
            <div className="rating">
              <button>See Review</button>
            </div>
          </div>
        </div>
        <div className="album-card">
          <img src={nisemono} alt="Hit Me Hard and Soft" />
          <div className="album-info">
            <p>Album</p>
            <h3>Hit Me Hard and Soft</h3>
            <p>Billie Eilish</p>
            <div className="rating">
              <button>See Review</button>
            </div>
          </div>
        </div>
        <div className="album-card">
          <img src={rapgod} alt="Cutouts" />
          <div className="album-info">
            <p>Album</p>
            <h3>Cutouts</h3>
            <p>The Smile</p>
            <div className="rating">
              <button>See Review</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
