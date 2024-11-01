import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SongHeader from "../Components/SongHeader";
import SongLyrics from "../Components/SongLyrics";

export default function SongPage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSongData() {
      const songsUrl = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/songs/${id}.json`;

      try {
        const response = await fetch(songsUrl);
        const data = await response.json();

        if (data) {
          setSong({ id, ...data });
        } else {
          setError("Song not found.");
        }
      } catch (error) {
        console.error("Error fetching song data:", error);
        setError("Failed to fetch song data.");
      } finally {
        setLoading(false);
      }
    }

    fetchSongData();
  }, [id]);

  if (loading) return <div>Loading song data...</div>;
  if (error) return <p>{error}</p>;

  return (
    <div className="song-container-new">
      {song ? (
        <>
          <SongHeader song={song} />
          <SongLyrics song={song} />
        </>
      ) : (
        <p>Song not found.</p>
      )}
    </div>
  );
}
