import charlixcx from "../images/charli-xcx.png";
import nisemono from "../images/nisemono.png";
import rapgod from "../images/rap-god.png";

export default function HomeReleases() {
  return (
    <section className="popular-releases-section">
      <h2>Popular releases</h2>
      <div className="albums-grid">
        <div className="album-card">
          <img src={charlixcx} alt="Brat" />
          <div className="album-info">
            <p>Album</p>
            <h3>Brat</h3>
            <p>Charli XCX</p>
            <p>Electropop</p>
          </div>
        </div>
        <div className="album-card">
          <img src={nisemono} alt="Hit Me Hard and Soft" />
          <div className="album-info">
            <p>Album</p>
            <h3>Hit Me Hard and Soft</h3>
            <p>Billie Eilish</p>
            <p>Alt-Pop</p>
          </div>
        </div>
        <div className="album-card">
          <img src={rapgod} alt="Cutouts" />
          <div className="album-info">
            <p>Album</p>
            <h3>Cutouts</h3>
            <p>The Smile</p>
            <p>Art Rock</p>
          </div>
        </div>
      </div>
    </section>
  );
}
