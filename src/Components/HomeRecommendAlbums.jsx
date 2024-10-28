export default function HomeRecommendAlbums({ album }) {
  return (
    <>
      <div className="album-card">
        <img src={`${album.image}`} alt={album.name} />
        <div className="album-info">
          <p>Album</p>
          <h3>{album.name}</h3>
          <p>{album.artistId}</p>
          <p>{album.genreId}</p>
        </div>
      </div>
    </>
  );
}
