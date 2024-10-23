import { useState } from "react";
import Drake from "../images/artist-image/drake.png"; // Example image paths
import KendrickLamar from "../images/artist-image/kendrick-lamar.png";
import JCole from "../images/artist-image/j-cole.png";
import TPAB from "../images/album-covers/tpab.png";
import Madvillainy from "../images/album-covers/madvillainy.png";
import Illmatic from "../images/album-covers/illmatic.png";

export default function Genre() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleText = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="genres-container">
      <h1>Hip Hop</h1>
      <p>
        {isExpanded
          ? "Hip hop is a form of music emphasizing rhythmic beat patterns and spoken delivery rather than harmonic melodies and sung vocals. Much of hip hop's roots can be traced to Deejay, a form of Reggae music that immigrant DJ Kool Herc hoped to emulate in the Bronx borough of New York City. The style quickly took over in more populated areas like Harlem and Queens, where many enjoyed the loose, Afrocentric nature of the parties Herc would put on. Adapting the format to Disco and Funk breaks rather than the reggae Herc utilized further enhanced the genre's appeal in urban communities."
          : "Emerged primarily on the United States east coast in African American communities in the late 1970s; emphasizes rhythmic beat patterns and a type of spoken vocal delivery known as rapping."}
      </p>
      <button className="read-more" onClick={handleToggleText}>
        {isExpanded ? "Hide Text" : "Read More"}
      </button>

      <h2>Popular Artists</h2>
      <div className="popular-artists">
        <div className="popular-artists-card">
          <img src={Drake} alt="Drake" />
          <h3>Drake</h3>
        </div>
        <div className="popular-artists-card">
          <img src={KendrickLamar} alt="Kendrick Lamar" />
          <h3>Kendrick Lamar</h3>
        </div>
        <div className="popular-artists-card">
          <img src={JCole} alt="J. Cole" />
          <h3>J. Cole</h3>
        </div>
      </div>
      <button className="see-more-artists">See more</button>

      <h2>Top Rated Albums</h2>
      <div className="top-rated-albums">
        <div className="top-rated-albums-card">
          <img src={TPAB} alt="#1 To Pimp A Butterfly" />
          <h3>#1 To Pimp A Butterfly</h3>
          <p>Kendrick Lamar</p>
        </div>
        <div className="top-rated-albums-card">
          <img src={Madvillainy} alt="#2 Madvillainy" />
          <h3>#2 Madvillainy</h3>
          <p>Madvillain</p>
        </div>
        <div className="top-rated-albums-card">
          <img src={Illmatic} alt="#3 Illmatic" />
          <h3>#3 Illmatic</h3>
          <p>Nas</p>
        </div>
      </div>
      <button className="see-more-albums">See more</button>
    </div>
  );
}
