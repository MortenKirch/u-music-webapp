import { useEffect, useState } from "react";
// import charlixcx from "../images/charli-xcx.png";
// import nisemono from "../images/nisemono.png";
// import rapgod from "../images/rap-god.png";
import HomeRecommendAlbums from "./HomeRecommendAlbums";

export default function HomeRecommend() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbums() {
      const url =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/albums.json";
      const response = await fetch(url);
      const data = await response.json();
      const albumsArray = Object.keys(data).map((key) => ({
        id: key,
        name: key,
        ...data[key][0],
      })); // from object to array
      setAlbums(albumsArray);
    }
    getAlbums();
  }, []);

  return (
    <section className="home-recommended-section">
      <h2>Recommended</h2>
      <div className="recommended-albums-slider">
        {albums.map((album) => (
          <div className="recommended-albums-card" key={album.id}>
            <HomeRecommendAlbums album={album} />
          </div>
        ))}
        {/* <div className="album-card">
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
        </div> */}
      </div>
    </section>
  );
}
