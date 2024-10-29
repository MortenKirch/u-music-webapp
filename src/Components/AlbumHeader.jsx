export default function AlbumHeader({ album }) {
  return (
    <>
      <div className="full-album-header">
        <img src={`${album.image}`} alt={album.name} />
        <div className="full-album-header-info">
          <div>
            <p className="full-album-header-title">Title</p>
            <p className="full-album-header-description">{album.name}</p>
          </div>

          <div>
            <p className="full-album-header-title">Artist</p>
            <p className="full-album-header-description">{album.artist}</p>
          </div>

          <div>
            <p className="full-album-header-title">Release</p>
            <p className="full-album-header-description">{album.release}</p>
          </div>

          <div>
            <p className="full-album-header-title">Average Rating</p>
            <p className="full-album-header-description">{album.avgRating}</p>
          </div>

          <div>
            <p className="full-album-header-title">Genres</p>
            <p className="full-album-header-description">
              {album.genres.join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
