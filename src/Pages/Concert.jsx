import concert from "../images/Eminem tour.jpeg";
import flag from "../images/Flag.png";
import warmup from "../images/eminem-fuel.png";
import warmup2 from "../images/Album1.jpg";

export default function Concert() {
  return (
    <>
      <div className="top-sang-container">
        <div className="concert-header-section">
          <img src={concert} alt="Concert Cover" className="concert-cover" />

          <div className="concert-details">
            <h2 className="concert-title">Eminem</h2>
            <p className="concert-data">The Anger Management Tour</p>
            <p className="concert-data">Jul 3 - Oct 10 2024</p>
            <div className="concert-location">
              <span>Location: USA</span>
              <img src={flag} alt="USA Flag" className="concert-flag" />
            </div>

            <a href="#" className="concert-date-button">
              See Dates
            </a>
          </div>
        </div>

        <div className="setlist-section">
          <h3 className="setlist-title">Set list</h3>
          <div className="setlist-box">
            <div className="setlist-song">
              <p className="setlist-song-title">Rap God</p>
              <p className="setlist-song-data">5:43</p>
            </div>
            <span className="setlist-rating">Rating: 9.5/10</span>
          </div>

          <a href="#" className="see-full-list">
            See full list
          </a>
        </div>

        <div className="warmup-section">
          <h3 className="warmup-title">Warmup</h3>
          <div className="warmup-box">
            <div className="warmup-album">
              <img src={warmup} alt="warmup cover" className="warmup-cover" />

              <span className="warmup-name">Five Finger Death Punch</span>
            </div>

            <div className="warmup-album">
              <img src={warmup2} alt="Album Cover" className="warmup-cover" />
              <span className="warmup-name">Ice Nine Kills</span>
            </div>
          </div>
        </div>

        <div className="tourdates-section">
          <h3 className="tourdates-title">Tour dates</h3>
          <div className="tourdates-list">
            <div className="tourdate-box">
              <p className="tourdate">May 31 - Charlotte, NC</p>
              <p className="tourlocation">Location: PNC Music Pavillion</p>
            </div>

            <div className="tourdate-box">
              <p className="tourdate">May 28 - Landover, MD</p>
              <p className="tourlocation">Location: FedEx Field</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
