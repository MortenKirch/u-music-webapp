import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HipHopImage from "../images/explore-genres/hip-hop.png";
import MetalImage from "../images/explore-genres/metal.png";
import PopImage from "../images/explore-genres/pop.png";
import ElectronicImage from "../images/explore-genres/electronic.png";

export default function ExploreGenres() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const genres = [
    {
      name: "Hip Hop",
      image: HipHopImage,
      description:
        "Emerged primarily on the United States east coast in African American communities in the late 1970s; emphasizes rhythmic beat patterns and a type of spoken vocal delivery known as rapping.",
      subgenres: [
        "Abstract Hip Hop",
        "Boom Bap",
        "Chipmunk Soul",
        "Chopped and Screwed",
        "Christian Hip Hop",
        "Cloud Rap",
        "Comedy Rap",
        "Conscious Hip Hop",
        "Country Rap",
        "Crunk",
        "East Coast Hip Hop",
        "Emo Rap",
        "Experimental Hip Hop",
        "G-Funk",
        "Hardcore Hip Hop",
        "Instrumental Hip Hop",
        "Jazz Rap",
        "Latin Rap",
        "Lo-Fi Hip Hop",
        "Political Hip Hop",
        "Pop Rap",
        "Southern Hip Hop",
        "Trap",
        "Turntablism",
        "UK Hip Hop",
        "West Coast Hip Hop",
      ],
    },
    {
      name: "Metal",
      image: MetalImage,
      description:
        "Driving and distorted riffs, aggressive drumming, vigorous vocals, and an all-around show of brute force in its early days, since branching into dozens of subgenres.",
      subgenres: [
        "Alternative Metal",
        "Avant-Garde Metal",
        "Black Metal",
        "Death Metal",
        "Doom Metal",
        "Drone Metal",
        "Folk Metal",
        "Gothic Metal",
        "Grindcore",
        "Groove Metal",
        "Heavy Metal",
        "Industrial Metal",
        "Kawaii Metal",
        "Metalcore",
        "Neoclassical Metal",
        "Post-Metal",
        "Power Metal",
        "Progressive Metal",
        "Sludge Metal",
        "Southern Metal",
        "Stoner Metal",
        "Thrash Metal",
        "Viking Metal",
      ],
    },
    {
      name: "Pop",
      image: PopImage,
      description:
        "Umbrella of popular styles closely tied to mass production and mass marketing, focusing on catchiness and accessibility through melody, rhythm, lyrics, and hooks.",
      subgenres: [
        "Afrobeats",
        "Alt-Pop",
        "Art Pop",
        "Baroque Pop",
        "Boy Band",
        "Bubblegum",
        "City Pop",
        "Dance-Pop",
        "Dansktop",
        "Electropop",
        "Europop",
        "Girl Group",
        "Glitch Pop",
        "Hyperpop",
        "Indie Pop",
        "J-Pop",
        "K-Pop",
        "Latin Pop",
        "Progressive Pop",
        "Psychedelic Pop",
        "Schlager",
        "Synthpop",
      ],
    },
    {
      name: "Electronic Music",
      image: ElectronicImage,
      description:
        "Uses non-traditional electronic instrumentation and sound manipulation technology as the primary backbone of a composition.",
      subgenres: [
        "Bit Music",
        "Chillout",
        "Drift Phonk",
        "Dubstep",
        "Electronic Dance Music",
        "Electroclash",
        "Electro Swing",
        "Folktronica",
        "Future Bass",
        "Glitch",
        "House",
        "Hypertechno",
        "IDM",
        "Illbient",
        "Indietronica",
        "Moogsploitation",
        "Nightcore",
        "Nu-Disco",
        "Space Ambient",
        "Synthwave",
        "Techno",
        "Trance",
        "UK Bass",
        "UK Garage",
      ],
    },
  ];

  const [expandedGenreIndex, setExpandedGenreIndex] = useState(null);

  const toggleSubgenres = (index) => {
    if (expandedGenreIndex === index) {
      setExpandedGenreIndex(null);
    } else {
      setExpandedGenreIndex(index);
    }
  };
  return (
    <div className="explore-genres-container">
      <div className="searchbar-container">
        <div className="search-input-container">
          <input type="text" placeholder="Search the library..." />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </div>
      <h2>Genres</h2>

      <div className="genres-list">
        {genres.map((genre, index) => (
          <div
            className={`genre-card ${
              expandedGenreIndex === index ? "expanded" : ""
            }`}
            key={index}
          >
            <img src={genre.image} alt={genre.name} className="genre-image" />
            <div className="genre-info">
              <h3>{genre.name}</h3>
              <p>{truncateText(genre.description, 75)}</p>
              <button
                className="show-subgenres"
                onClick={() => toggleSubgenres(index)}
              >
                {expandedGenreIndex === index
                  ? `Hide ${genre.subgenres.length} subgenres`
                  : `Show ${genre.subgenres.length} subgenres`}
              </button>
            </div>
            {expandedGenreIndex === index && (
              <div className="subgenres-container">
                <ul className="subgenres-list">
                  {genre.subgenres.map((subgenre, subIndex) => (
                    <li key={subIndex}>{subgenre}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
