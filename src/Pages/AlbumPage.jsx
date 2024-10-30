import AlbumHeader from "../Components/AlbumHeader";
import AlbumSongs from "../Components/AlbumSongs";
import AlbumReviews from "../Components/AlbumReviews";
import { useEffect, useState } from "react";

export default function AlbumPage() {
  const [albums, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function getAlbum() {
      const albumsUrl =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/albums.json";
      const response = await fetch(albumsUrl);
      const data = await response.json();
      const firstKey = Object.keys(data)[0];
      if (firstKey) {
        const firstAlbum = {
          id: firstKey,
          name: firstKey,
          ...data[firstKey][0],
        };
        setAlbum(firstAlbum);
      }
    }

    async function getSongs() {
      const songsUrl =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/songs.json";
      const response = await fetch(songsUrl);
      const songs = await response.json();
      setSongs(songs);
    }

    getAlbum();
    getSongs();
  }, []);

  return (
    <section className="full-album-section">
      <AlbumHeader album={albums} />
      <AlbumSongs songs={songs} />
      <AlbumReviews />
    </section>
  );
}
