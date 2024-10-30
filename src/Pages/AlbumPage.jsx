import AlbumHeader from "../Components/AlbumHeader";
import AlbumSongs from "../Components/AlbumSongs";
import AlbumReviews from "../Components/AlbumReviews";

import { useEffect, useState } from "react";

export default function HomeRecommend() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbums() {
      const url =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/albums.json";
      const response = await fetch(url);
      const data = await response.json();
      const firstKey = Object.keys(data)[0];
      if (firstKey) {
        const firstAlbum = {
          id: firstKey,
          name: firstKey,
          ...data[firstKey][0],
        };
        setAlbums([firstAlbum]);
      }
    }
    getAlbums();
  }, []);

  return (
    <section className="full-album-section">
      {albums.map((album) => (
        <div key={album.id}>
          <AlbumHeader album={album} />
        </div>
      ))}
    </section>
  );
}
