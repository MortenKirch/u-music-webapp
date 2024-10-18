export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-header">
          <h1>Pug Fartmeister</h1>
          <p>Followers: 231</p>
          <p>Following: 12</p>
          <button className="followme-button">Follow</button>
        </div>
      </div>

      <div className="favorit-sektion-artist"></div>
      <h2>Favorite Artists</h2>
      <div className="artist-favorit">
        <p>Noah Kahan</p>
        <p>Kendrick Lamar</p>
        <p>Drake</p>
        <p>Eminem</p>
      </div>

      <div className="favorit-sange-sektion">
        <h2>Favorite songs</h2>
        <ul className="sange-list">
          <li>Rap God - 9:10</li>
          <li>Rap God - 9:10</li>
          <li>Rap God - 9:10</li>
          <li>Rap God - 9:10</li>
        </ul>
      </div>

      <div className="favorit-albums"></div>
      <h2>Favorite Albums</h2>
      <ul className="album-list">
        <li>The Eminem show</li>
        <li>The Eminem show</li>
      </ul>

      <div className="reviews-sektion">
        <h2>Reviews</h2>
        <h2>Ratings</h2>
        <h2>Want to listen</h2>
      </div>
    </>
  );
}
