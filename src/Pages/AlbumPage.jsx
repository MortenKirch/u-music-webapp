import AlbumHeader from "../Components/AlbumHeader";
import AlbumSongs from "../Components/AlbumSongs";
import AlbumReviews from "../Components/AlbumReviews";
import { useEffect, useState } from "react";

export default function AlbumPage() {
  const [album, setAlbum] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function getAlbum() {
      const albumsUrl =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/albums.json";
      const response = await fetch(albumsUrl);
      const data = await response.json();
      const firstKey = Object.keys(data)[0]; // Get the first album's key
      if (firstKey) {
        const firstAlbum = {
          id: firstKey,
          name: firstKey,
          ...data[firstKey][0], // Access the first album in the structure
        };
        setAlbum(firstAlbum);
      }
    }

    async function getSongs() {
      const songsUrl =
        "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/songs.json";
      const response = await fetch(songsUrl);
      const songsData = await response.json();

      const songsArray = Object.entries(songsData)
        .map(([title, details]) => ({
          id: title,
          name: title,
          ...details,
        }))
        .sort((a, b) => a.order - b.order);

      setSongs(songsArray);
    }

    getAlbum();
    getSongs();
  }, []);

  return (
    <section className="full-album-section">
      {album && <AlbumHeader album={album} />}
      <AlbumSongs songs={songs} />
      <AlbumReviews />
    </section>
  );
}
