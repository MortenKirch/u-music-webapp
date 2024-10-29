import Kendrick from "../images/artist-image/kendrick-lamar.png";

export default function ArtistProfileArtist() {
  return (
    <div className="artist-profile-header">
      <img src={Kendrick} alt="Artist Image" className="artist-profile-img" />
      <div className="artist-profile-info">
        <h1 className="artist-profile-name">Kendrick Lamar</h1>
        <div>
          <p className="artist-profile-title">Born</p>
          <p className="artist-profile-bio">
            17 June 1987, Compton, CA, United States
          </p>
        </div>
        <div>
          <p className="artist-profile-title">Member of</p>
          <p className="artist-profile-bio">
            Black Hippy, The Hillbillies, The Little Homies
          </p>
        </div>
        <div>
          <p className="artist-profile-title">Genres</p>
          <p className="artist-profile-genres">
            West Coast Hip Hop, Conscious Hip Hop, Hardcore Hip Hop, Trap, Pop
            Rap, Jazz Rap
          </p>
        </div>
      </div>
    </div>
  );
}
