import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SongHeader from "../Components/SongHeader";
import SongLyrics from "../Components/SongLyrics";

export default function SongPage() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongData = async () => {
      const encodedId = encodeURIComponent(id); // Ensure encoding
      const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/songs/${encodedId}.json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched song data:", data);

        if (data) {
          setSong({ title: id, ...data });
        } else {
          console.error("No song data found.");
        }
      } catch (error) {
        console.error("Error fetching song data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSongData();
  }, [id]);

  if (loading) return <div>Loading song data...</div>;
  if (!song) return <p>Song not found.</p>;

  return (
    <div className="song-container-new">
      <SongHeader song={song} />
      <SongLyrics lyrics={song.lyrics} />
    </div>
  );
}
