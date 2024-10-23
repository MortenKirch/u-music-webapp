import "../App.css";
import profilePic from "../images/cat.jpg";

// Import album cover and music icons
import albumcover from "../images/to-pimp-a-butterfly.png";
import soundcloud from "../images/Soundcloud.jpg";
import apple from "../images/Apple.png";
import spotify from "../images/Spotify.png";

export default function Album() {
  return (
    <div className="album-container-album">
      <div className="album-display-section-album">
        <div className="album-header-info-album">
          <img
            src={albumcover}
            alt="to-pimp-a-butterfly-album"
            className="album-cover-album"
          />
          <div className="album-details-info-album">
            <h1 className="album-title-heading-album">To Pimp A Butterfly</h1>
            <p className="album-meta-album">Avg Rating: 3.45</p>
            <div className="music-icons-album">
              <img src={soundcloud} alt="soundcloud" className="icon-album" />
              <img src={apple} alt="apple" className="icon-album" />
              <img src={spotify} alt="spotify" className="icon-album" />
            </div>
          </div>
        </div>

        <div className="album-songs-section-album">
          <h2 className="album-songs-title-album">Songs</h2>
          <ul className="album-songs-list-album">
            {/* Song 1 */}
            <li className="album-song-row-album">
              <img
                src={albumcover}
                alt="Wesley's Theory"
                className="album-song-cover-album"
              />
              <div className="album-song-info-text-album">
                <p className="album-song-title-album">Wesley's Theory</p>
                <p className="album-singer-name-album">Kendrick Lamar</p>
              </div>
              <div className="album-song-details-info-album">
                <p className="album-timestamp-album">4:47</p>
                <p>Rating: 3.5/10</p>
              </div>
            </li>

            <li className="album-song-row-album">
              <img
                src={albumcover}
                alt="For Free? (Interlude)"
                className="album-song-cover-album"
              />
              <div className="album-song-info-text-album">
                <p className="album-song-title-album">For Free? (Interlude)</p>
                <p className="album-singer-name-album">Kendrick Lamar</p>
              </div>
              <div className="album-song-details-info-album">
                <p className="album-timestamp-album">:10</p>
                <p>Rating: 4.0/10</p>
              </div>
            </li>

            <li className="album-song-row-album">
              <img
                src={albumcover}
                alt="King Kunta"
                className="album-song-cover-album"
              />
              <div className="album-song-info-text-album">
                <p className="album-song-title-album">King Kunta</p>
                <p className="album-singer-name-album">Kendrick Lamar</p>
              </div>
              <div className="album-song-details-info-album">
                <p className="album-timestamp-album">3:54</p>
                <p>Rating: 4.7/10</p>
              </div>
            </li>

            <li className="album-song-row-album">
              <img
                src={albumcover}
                alt="Institutionalized"
                className="album-song-cover-album"
              />
              <div className="album-song-info-text-album">
                <p className="album-song-title-album">Institutionalized</p>
                <p className="album-singer-name-album">Kendrick Lamar</p>
              </div>
              <div className="album-song-details-info-album">
                <p className="album-timestamp-album">4:31</p>
                <p>Rating: 4.6/10</p>
              </div>
            </li>

            <li className="album-song-row-album">
              <img
                src={albumcover}
                alt="These Walls"
                className="album-song-cover-album"
              />
              <div className="album-song-info-text-album">
                <p className="album-song-title-album">These Walls</p>
                <p className="album-singer-name-album">Kendrick Lamar</p>
              </div>
              <div className="album-song-details-info-album">
                <p className="album-timestamp-album">5:00</p>
                <p>Rating: 4.8/10</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="album-reviews-section-album">
        <h2 className="album-reviews-title-album">Reviews</h2>
        <div className="album-review-controls-album">
          <p className="album-sort-by-album">Sort by:</p>
          <p className="album-sort-option-album">Date</p>
        </div>
        <div className="album-review-list-album">
          {/* Individual review */}
          <div className="album-review-box-album">
            <div className="album-review-header-album">
              <img
                src={profilePic}
                alt="Profile"
                className="album-reviewer-pic-album"
              />
              <div>
                <h4 className="album-reviewer-name-album">User Name</h4>
                <p className="album-review-date-album">Date: 2024</p>
              </div>
            </div>
            <div className="album-review-content-album">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="album-review-actions-album">
              <p className="album-review-rating-album">Rating: 3.5/10</p>
              <div className="album-heart-reply-album">
                <button className="album-heart-button-album">❤️</button>
                <p className="album-reply-thread-album">Reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
