export default function AlbumSongs({ songs }) {
  return (
    <div className="album-songs">
      <h2>Songs</h2>
      <ul className="album-songs-list">
        {songs.map((song, index) => (
          <li key={index} className="album-song-row">
            <img
              src={song.cover}
              alt={song.title}
              className="album-song-cover"
            />
            <div className="album-song-info">
              <p className="album-song-title">{song.title}</p>
              <p className="album-song-artist">{song.artist}</p>
            </div>
            <div className="album-song-details">
              <p className="album-song-duration">{song.duration}</p>
              <p className="album-song-rating">Rating: {song.rating}/10</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="see-all-songs">See all songs</p>
    </div>
  );
}
