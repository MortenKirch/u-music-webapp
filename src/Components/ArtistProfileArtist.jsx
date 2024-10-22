import Eminem from "../images/Eminem.jpeg";

export default function ArtistProfileArtist() {
  return (
    <div className="artist-section">
      <div className="artist-image">
        <img src={Eminem} alt="Eminem" />
      </div>
      <div className="artist-info">
        <h2>Eminem</h2>
        <p>Born: Detroit, ML, United States</p>
        <p>Member of: D12, Bad Mee..</p>
        <p>Genres: Pop Rap, Hardcore Hi..</p>
      </div>
    </div>
  );
}
