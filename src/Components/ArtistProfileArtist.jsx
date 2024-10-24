import Eminem from "../images/Eminem.jpeg";

export default function ArtistProfileArtist() {
  return (
    <div className="artist-profile-header">
      <img src={Eminem} alt="Artist Image" className="artist-profile-img" />
      <div className="artist-profile-info">
        <h1 className="artist-profile-name">Eminem</h1>
        <p className="artist-profile-bio">Born: Detroit, MI, United States</p>
        <p className="artist-profile-bio">Member of: D12, Bad Mee..</p>
        <p className="artist-profile-genres">Genres: Pop Rap, Hardcore Hi..</p>
      </div>
    </div>
  );
}
