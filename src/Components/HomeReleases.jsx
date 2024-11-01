import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomeReleases() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function getSongs() {
      const url =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/songs.json";
      const response = await fetch(url);
      const data = await response.json();
      const SongsArray = Object.keys(data).map((key) => ({
        id: key,
        name: key,
        ...data[key],
      })); // from object to array
      setSongs(SongsArray);
    }
    getSongs();
  }, []);
  return (
    <section className="home-recommended-section">
      <h2>Popular Releases</h2>
      <div className="homepage-albums-slider">
        {songs.map((song) => (
          <div className="homepage-albums-card" key={song.id}>
            {console.log(song.image)}
            <div className="album-card">
              <img src={song.image} alt={song.name} />
              <div className="album-info">
                <p>Song</p>
                <h3>{song.name}</h3>
                <p>{song.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
