import TPAB from "../images/album-covers/tpab.png";
import GKMC from "../images/album-covers/gkmc.png";

export default function ArtistProfileAlbum() {
  const albums = [
    {
      title: "To Pimp A Butterfly",
      year: 2015,
      rating: "9/10",
      img: TPAB,
    },
    {
      title: "good kid, m.A.A.d city ",
      year: 2012,
      rating: "8/10",
      img: GKMC,
    },
  ];

  return (
    <>
      <h2 className="artist-profile-section-title">Top Albums</h2>
      <div className="artist-profile-top-albums">
        {albums.map((albums, index) => (
          <div key={index} className="artist-profile-album">
            <img
              src={albums.img}
              alt="Album 1"
              className="artist-profile-album-img"
            />
            <div className="artist-profile-album-info">
              <p className="artist-profile-album-title">{albums.title}</p>
              <p className="artist-profile-album-year">{albums.year} - Album</p>
              <p className="artist-profile-album-rating">
                Rating: {albums.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
