export default function ArtistProfileSongsComp() {
  return (
    // udkast til når vi kan gøre ting dynamisk.
    <>
      <div className="song-entry">
        <img src={songid.img} alt="Fuel" />
        <div className="song-info">
          <p>{songid.name}</p>
          <p>{songid.artist}</p>
        </div>
        <div className="song-details">
          <p>{songid.duration}</p>
          <p>{songid.rating}</p>
        </div>
      </div>
    </>
  );
}
