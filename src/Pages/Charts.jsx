import TooPimpAButterfly from "../images/to-pimp-a-butterfly.png";
import WishYouWereHere from "../images/wish-you-were-here.png";
import OkComputer from "../images/ok-computer.png";
import InRainbows from "../images/in-rainbows.png";
import sortIcon from "../images/sort.svg";

export default function Charts() {
  return (
    <div className="albums-list-container">
      <h2>Top Albums of All Time</h2>
      <nav className="albums-navigation">
        <span>Artists</span>
        <span className="active">Albums</span>
        <span>Genres</span>
        <span>Songs</span>
      </nav>
      <div className="sort-by">
        <p>Sort by</p>
        <span className="sort-icon">
          <img src={sortIcon} />
        </span>
      </div>

      <div className="album-entry">
        <div className="album-rank">1</div>
        <img src={TooPimpAButterfly} alt="To Pimp a Butterfly" />
        <div className="album-info">
          <h3>To Pimp a Butterfly</h3>
          <h4>Kendrick Lamar</h4>
          <p>15 March 2015</p>
          <h4>Conscious Hip Hop, West Coast Hip Hop</h4>
          <p>Avg. Rating: 4.38/5</p>
        </div>
      </div>

      <div className="album-entry">
        <div className="album-rank">2</div>
        <img src={OkComputer} alt="OK Computer" />
        <div className="album-info">
          <h3>OK Computer</h3>
          <h4>Radiohead</h4>
          <p>16 June 1997</p>
          <h4>Alternative Rock, Art Rock</h4>
          <p>Avg. Rating: 4.29/5</p>
        </div>
      </div>

      <div className="album-entry highlighted">
        <div className="album-rank">3</div>
        <img src={InRainbows} alt="In Rainbows" />
        <div className="album-info">
          <h3>In Rainbows</h3>
          <h4>Radiohead</h4>
          <p>10 October 2007</p>
          <h4>Art Rock, Alternative Rock</h4>
          <p>Avg. Rating: 4.32/5</p>
        </div>
      </div>

      <div className="album-entry">
        <div className="album-rank">4</div>
        <img src={WishYouWereHere} alt="Wish You Were Here" />
        <div className="album-info">
          <h3>Wish You Were Here</h3>
          <h4>Pink Floyd</h4>
          <p>12 September 1975</p>
          <h4>Progressive Rock, Art Rock</h4>
          <p>Avg. Rating: 4.34/5</p>
        </div>
      </div>
    </div>
  );
}
