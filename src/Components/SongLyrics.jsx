export default function SongLyrics({ song }) {
  return (
    <div className="song-lyrics-container">
      <h2>Lyrics</h2>
      <div className="lyrics-content">
        <p>{song.lyrics}</p>
      </div>
      <a href="#" className="see-all-lyrics">
        See all lyrics
      </a>
    </div>
  );
}
