import { useEffect, useState } from "react";
import HomeRecommendAlbums from "./HomeRecommendAlbums";
import { Link } from "react-router-dom";

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
      }));
      setAlbums(albumsArray);
    }
    getAlbums();
  }, []);

  return (
    <section className="home-recommended-section">
      <h2>Recommended</h2>
      <div className="homepage-albums-slider">
        {albums.map((album) => (
          <div className="homepage-albums-card" key={album.id}>
            <Link to="/album">
              <HomeRecommendAlbums album={album} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
