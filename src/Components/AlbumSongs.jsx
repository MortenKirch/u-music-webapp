export default function AlbumSongs({ songs }) {
  // Map over songs to display each song’s details
  const songEntries = songs.map((song) => ({
    uid: song.id, // This is the song title
    ...song,
  }));

  return (
    <div className="full-album-songs">
      <h2>Songs</h2>
      <ul className="full-album-songs-list">
        {songEntries.map((song) => (
          <li key={song.uid} className="full-album-song-row">
            <div className="full-album-song-info">
              <p>{song.order}</p>
              <p className="full-album-song-title">{song.uid}</p>{" "}
              <p className="full-album-song-duration">{song.duration}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
