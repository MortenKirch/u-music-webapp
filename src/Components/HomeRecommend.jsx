import charlixcx from "../images/charli-xcx.png";
import nisemono from "../images/nisemono.png";
import rapgod from "../images/rap-god.png";

export default function HomeRecommend() {
  return (
    <section className="home-recommended-section">
      <h2>Recommended</h2>
      <div className="albums-grid">
        <div className="album-card">
          <img src={rapgod} alt="The Eminem Show" />
          <div className="album-info">
            <p>Album</p>
            <h3>The Eminem Show</h3>
            <p>Eminem</p>
            <p>Hip Hop, METAL</p>
          </div>
        </div>
        <div className="album-card">
          <img src={charlixcx} alt="Boys" />
          <div className="album-info">
            <p>Single</p>
            <h3>Boys</h3>
            <p>Charli XCX</p>
            <p>Electropop, Alt-pop</p>
          </div>
        </div>
        <div className="album-card">
          <img src={nisemono} alt="Nisemono" />
          <div className="album-info">
            <p>EP</p>
            <h3>Nisemono</h3>
            <p>Ginger Root</p>
            <p>Bedroom pop, City pop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
