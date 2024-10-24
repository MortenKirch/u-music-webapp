import Fuel from "../images/eminem-fuel.png";
import RapGod from "../images/rap-god.png";

export default function ArtistProfileAlbum() {
  const albums = [
    {
      title: "Encore",
      year: 2009,
      rating: "8.3/10",
      img: Fuel,
    },
    {
      title: "Rap God",
      year: 2008,
      rating: "9.1/10",
      img: RapGod,
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
