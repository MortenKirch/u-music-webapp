import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import HipHopImage from "../images/album-covers/tpab.png";
import MetalImage from "../images/album-covers/paranoid.png";
import PopImage from "../images/album-covers/abbey-road.png";
import ElectronicImage from "../images/album-covers/mezzanine.png";

export default function ExploreGenres() {
  const navigate = useNavigate();

  const genres = [
    {
      name: "Hip Hop",
      image: HipHopImage,
      description:
        "Emerged primarily on the United States east coast in African American communities in the late 1970s; emphasizes rhythmic beat patterns and a type of spoken vocal delivery known as rapping.",
      subgenres: [
        {
          name: "Abstract Hip Hop",
          teaser:
            "Uses much more abstract lyricism than what is considered conventional within the genre, typically through use of metaphors, symbolism, and cryptic meanings.",
        },
        {
          name: "Boom Bap",
          teaser:
            "Production style identified by an acoustic-sounding drum pattern of a kick drum on the downbeat followed by a cracking snare on the upbeat.",
        },
        {
          name: "Chopped and Screwed",
          teaser:
            "Remixing technique that consists of skipping effects (chopping) and dropping the tempo (screwing).",
        },
        {
          name: "Christian Hip Hop",
          teaser:
            "Employs lyrics with a pro-Christianity message to profess the performer's faith, and often to attract new attention from potential converts.",
        },
        {
          name: "Cloud Rap",
          teaser:
            "Emerged in the early 2010s, known for its relaxed, dream-like, and reverb-heavy production style, taking influence from Chillwave, and producers' obscure sample choices.",
        },
        {
          name: "Comedy Rap",
          teaser:
            "Primarily intended to be humorous, through the use of comedic lyrics, production, delivery, or other musical aspects.",
        },
        {
          name: "Conscious Hip Hop",
          teaser: "Artists whose lyrics deal with social issues.",
        },
        {
          name: "Country Rap",
          teaser:
            "Combines the flow, production-emphasis, and demeanor of Hip Hop with the lyrical content and general approach of Country.",
        },
        {
          name: "Crunk",
          teaser:
            "Originating from the southern United States and reliant on drum machines and synthesizer stabs to create an energetic, often dance-oriented sound.",
        },
        {
          name: "East Coast Hip Hop",
          teaser:
            "Highly influential style of Hip Hop that developed in New York City, particularly in the South Bronx, during the 1970s.",
        },
        {
          name: "Emo Rap",
          teaser:
            "Moody, melancholic production combining atmospheric Cloud Rap, and Trap's typical drum programming, with sampling from Alternative Rock, Midwest Emo, Emo-Pop, and Pop Punk.",
        },
        {
          name: "Experimental Hip Hop",
          teaser:
            "Incorporates experimental and eccentric elements considered unconventional or unorthodox compared to more traditional hip hop.",
        },
        {
          name: "G-Funk",
          teaser:
            "Relaxed and organic sound featuring live instrumentation, use of P-Funk samples, and high-pitched synth lines.",
        },
        {
          name: "Hardcore Hip Hop",
          teaser:
            "Confrontation and aggression, whether in the lyricism, vocal delivery, hard beats, heavy production, or any combination thereof.",
        },
        {
          name: "Instrumental Hip Hop",
          teaser:
            "Can take the form of instrumental versions of songs that normally feature rapping, or hip hop originally released and always intended to be instrumental.",
        },
        {
          name: "Jazz Rap",
          teaser:
            "Incorporates elements of Jazz through the use of samples or live instrumentation.",
        },
        {
          name: "Latin Rap",
          teaser:
            "Primarily done in Spanish; incorporates Hispanic American Music elements into its sound.",
        },
        {
          name: "Lo-Fi Hip Hop",
          teaser:
            "Relaxed, laid-back form of Hip Hop, typically instrumental and influenced by Jazz Rap and Downtempo.",
        },
        {
          name: "Pop Rap",
          teaser:
            "Fuses Hip Hop's rapping and production traits with Pop elements such as melodious vocals and light, catchy tunes.",
        },
        {
          name: "Southern Hip Hop",
          teaser:
            "Hip Hop from artists based in the Southern region of the United States.",
        },
        {
          name: "Trap",
          teaser:
            "Originated in Atlanta in the early 2000s; distinctive fast hi-hat sound and heavy bass at moderate tempos.",
        },
        {
          name: "Turntablism",
          teaser:
            "Manipulating and re-appropriating vinyl records using a turntable and DJ mixer in a Hip Hop context, often featuring constant scratching and beat juggling between two or more recordings into original, distinctive tracks.",
        },
        {
          name: "UK Hip Hop",
          teaser: "Scene of the United Kingdom, influenced by American rap.",
        },
        {
          name: "West Coast Hip Hop",
          teaser:
            "Artists who originate from the West Coast region of the United States.",
        },
      ],
    },
    {
      name: "Metal",
      image: MetalImage,
      description:
        "Driving and distorted riffs, aggressive drumming, vigorous vocals, and an all-around show of brute force in its early days, since branching into dozens of subgenres.",
      subgenres: [
        {
          name: "Alternative Metal",
          teaser:
            "Mid-tempo style emphasizing melodicism and rhythmic heaviness; branches outside of the stylistic conventions of Metal.",
        },
        {
          name: "Avant-garde Metal",
          teaser:
            "Often breaking the bounds of the genre through experimental structures and instrumentation, or by incorporating outside influences.",
        },
        {
          name: "Black metal",
          teaser:
            "Highly distorted, treble-heavy guitars, tremolo-picked riffs, blast beats and double bass drumming, shrieked vocals, and raw, lo-fi production; often focuses on occult, dark imagery and atmosphere.",
        },
        {
          name: "Death Metal",
          teaser:
            "Heavily distorted, down-tuned guitars, palm-muted, tremolo-picked riffs, double-kick and blast beat percussion, chromatic chord progressions, minor keys, abrupt changes in tempo, and guttural vocals.",
        },
        {
          name: "Doom Metal",
          teaser:
            "Plodding tempos, repeated chords, and thick, distorted, down-tuned guitars in a style focused on foreboding, atmosphere, and tension.",
        },
        {
          name: "Drone Metal",
          teaser:
            "Extremely slow tempos, highly sustained, repetitive guitar notes, and minimalist song structures often omitting a traditional rhythm section and vocals.",
        },
        {
          name: "Folk Metal",
          teaser:
            "Features influences from various types of Traditional Folk Music expressed through melodies and/or traditional instrumentation, notably having a large scene in Europe.",
        },
        {
          name: "Gothic Metal",
          teaser:
            "Features heavy, low-mid tempo riffs, somber, gloomy atmosphere accentuated by ethereal keyboards and synthesizer layers, and vocal styles ranging from raspy growls to female operatic singing.",
        },
        {
          name: "Grindcore",
          teaser:
            "Features shortened song structures and a diverse palette of intense techniques such as blast and skank beats, tremolo and down-picking, and various harsh vocal styles.",
        },
        {
          name: "Groove Metal",
          teaser:
            "Midtempo riffs influenced by Thrash Metal but with a greater focus on rhythmic syncopation and heaviness over speed.",
        },
        {
          name: "Heavy Metal",
          teaser:
            "Heavier outgrowth of Hard Rock featuring greater distortion and intensity along with lesser Blues influences.",
        },
        {
          name: "Industrial Metal",
          teaser:
            "Incorporates the abrasive and heavy sound of Industrial into Metal, using elements like synthesizers and drum machines.",
        },
        {
          name: "Kawaii Metal",
          teaser:
            "Combines a heavy and metallic style with an upbeat, J-Pop-indebted tone and vocal style; associated with a 'kawaii aesthetic'.",
        },
        {
          name: "Metalcore",
          teaser:
            "Drop-tuned guitar riffs, constant double kick drumming with varying tempos and techniques, breakdown sections, and screaming or shouting vocals.",
        },
        {
          name: "Neoclassical Metal",
          teaser:
            "Greatly influenced by Western Classical Music in its style of playing and composing.",
        },
        {
          name: "Post-Metal",
          teaser:
            "Atmospheric and dense metallic riffs, unconventional songwriting, sonic experimentation, and adoption of eclectic influences.",
        },
        {
          name: "Power-Metal",
          teaser:
            "Developed from Heavy Metal and Speed Metal; characterized by its emphasis on speed, vocal melody and harmonized lead guitars.",
        },
        {
          name: "Progressive Metal",
          teaser:
            "Fuses amplified, guitar-driven sound with technical proficiency, virtuosity, complex compositions, innovative arrangements, eclecticism, and additional instrumentation.",
        },
        {
          name: "Sludge Metal",
          teaser:
            "Mixes Doom Metal's slow pacing, down-tuned riffing style and dark atmosphere with Hardcore Punk's aggression, abrasiveness and harsh vocals.",
        },
        {
          name: "Southern Metal",
          teaser:
            "Blues-influenced style that primarily incorporates Sludge Metal and Stoner Metal with metallic Southern Rock riffs.",
        },
        {
          name: "Stoner Metal",
          teaser:
            "Combines elements of Doom Metal with elements of Psychedelic Rock and Blues Rock to create a melodic yet heavy sound.",
        },
        {
          name: "Thrash Metal",
          teaser:
            "Blistering tempos, palm-muted, technical riffing influenced by Speed Metal, aggressive drumming utilizing double-kick and skank beats, and diverse vocal styles ranging from harsh to clean techniques.",
        },
        {
          name: "Viking Metal",
          teaser:
            "Developed out of Black Metal and embodies an epic, Viking-like aesthetic.",
        },
      ],
    },
    {
      name: "Pop",
      image: PopImage,
      description:
        "Umbrella of popular styles closely tied to mass production and mass marketing, focusing on catchiness and accessibility through melody, rhythm, lyrics, and hooks.",
      subgenres: [
        {
          name: "Afrobeats",
          teaser:
            "Originated in West Africa during the early 2010s and includes elements from Pop Rap, Contemporary R&B, and Dancehall.",
        },
        {
          name: "Alt-Pop",
          teaser:
            "Emerged in the late 2000s and early 2010s, combines chart Pop conventions with alternative/indie genre sensibilities sometimes on a more minimal and contemplative atmosphere, often extracted from Alternative R&B.",
        },
        {
          name: "Art Pop",
          teaser:
            "Inventive, idiosyncratic, or artistically ambitious, often experimenting with unconventional musical elements and conceptual approaches while retaining accessibility.",
        },
        {
          name: "Baroque Pop",
          teaser:
            "Incorporates elements of Western Classical Music, commonly featuring harpsichord or strings as well as the rhythmic flow and counterpoint of Baroque Music.",
        },
        {
          name: "Boy Band",
          teaser:
            "Male vocal groups often put together by talent managers or record producers.",
        },
        {
          name: "Bubblegum",
          teaser:
            "Upbeat, catchy, simple, and targeted at children and young teens; especially popular in the 1960s and 1970s.",
        },
        {
          name: "City Pop",
          teaser:
            "Wave of Japanese Pop intended to reflect urban life during the period of the country's booming economy in the 1970s and 1980s, featuring a contemporary Western sound and lush arrangements.",
        },
        {
          name: "Dance-Pop",
          teaser:
            "Simple, yet catchy melodies and throbbing beats inspired initially by Disco and later various House styles.",
        },
        {
          name: "Dansktop",
          teaser:
            "Danish equivalent to Dansbandsmusik with Schlager and Country influences and Contemporary Folk and Pop elements.",
        },
        {
          name: "Electropop",
          teaser:
            "Dense, layered, and compressed production, usually coupled with a distinct fuzzy and 'warm' low-frequency synthesizer style.",
        },
        {
          name: "Europop",
          teaser:
            "Emerged throughout mainland Europe in the early 1970s, referring to slick, highly commercial Pop songs that emphasize sugary melodies and light, bouncy instrumentation.",
        },
        {
          name: "Girl Group",
          teaser:
            "Combines elements of Rhythm & Blues, Rock & Roll, and Traditional Pop; typically performed by trios or quartets of female vocalists.",
        },
        {
          name: "Glitch Pop",
          teaser:
            "Incorporates elements of more experimental Electronic styles like IDM and Glitch.",
        },
        {
          name: "Hyperpop",
          teaser:
            "Developed and took inspiration from Bubblegum Bass and popular 2000s-2010s Electropop, characterized by eclectic, unconventional, mechanical-sounding and dense production; and by manipulated, usually auto-tuned vocals.",
        },
        {
          name: "Indie Pop",
          teaser:
            "Back-to-basics Rock approach combining a less mainstream and DIY ethos with melodic, lighthearted and straightforward songwriting.",
        },
        {
          name: "J-Pop",
          teaser:
            "Commercial Pop of Japan after the advent of the Heisei era (1989), characterized by modernized production, a more eclectic sound palette, and a more westernized vocal style.",
        },
        {
          name: "K-Pop",
          teaser:
            "Contemporary Pop scene in South Korea based on multiple mainstream influences such as Contemporary R&B, Dance-Pop, and Hip Hop.",
        },
        {
          name: "Latin Pop",
          teaser:
            "Characterized by its usage of Latino clichés and frequently influenced by traditional Latin American styles, commonly borrowing from their instrumentation.",
        },
        {
          name: "Progressive Pop",
          teaser:
            "Milder counterpart to Progressive Rock, emerging in the late 1960s and introducing complex songwriting and arrangements into a Pop context.",
        },
        {
          name: "Psychedelic Pop",
          teaser:
            "Combines unconventional instrumentation with studio effects to create a psychedelic atmosphere within melodic Pop music.",
        },
        {
          name: "Schlager",
          teaser:
            "Light, sentimental, melodic pop music common mainly in northern and central Europe.",
        },
        {
          name: "Synthpop",
          teaser:
            "Led by a prominent, melodic synthesizer sound, often with reverberated drum machine patterns that create a distinct atmospheric feel commonly associated with the 1980s.",
        },
      ],
    },
    {
      name: "Electronic Music",
      image: ElectronicImage,
      description:
        "Uses non-traditional electronic instrumentation and sound manipulation technology as the primary backbone of a composition.",
      subgenres: [
        {
          name: "Bit Music",
          teaser:
            "Created by sound chips, cards, and sequencers found in video game consoles, personal computers, and arcade machines, as well as synthesizers emulating these sounds.",
        },
        {
          name: "Chillout",
          teaser:
            "Broad category of many relaxed styles of Electronic music which predominantly draw influence from Electronic Dance Music subgenres and Ambient.",
        },
        {
          name: "Drift Phonk",
          teaser:
            "Busy, noisy production inspired by lo-fi Memphis Rap; frequently features 808 cowbell melodies and chopped, compressed samples.",
        },
        {
          name: "Dubstep",
          teaser:
            "Half-time syncopated and sparse beats set around 140 BPM with heavy sub-basses; emerged in South London in the early 2000s.",
        },
        {
          name: "Electronic Dance Music",
          teaser:
            "Broad category for subgenres mainly derived from Disco, featuring Electronic sounds, synthesizers, drum machines and varying BPM ranges.",
        },
        {
          name: "Electroclash",
          teaser:
            "Draws from 1980s styles such as Electro, New Wave, and Electro-Disco combined with Techno, resulting in minimal, throbbing beats and basslines, buzzing synthesizer parts, vocoders and often monotone, half-spoken, half-sung vocals.",
        },
        {
          name: "Electro Swing",
          teaser:
            "Upbeat, energetic style that splices Swing with Electronic Dance Music, looking to recapture the atmosphere of late 1920s to mid-1940s Jazz within a more updated club-friendly medium.",
        },
        {
          name: "Folktronica",
          teaser:
            "Combines sound design techniques from IDM and Glitch with acoustic instrumentation inspired by Contemporary Folk.",
        },
        {
          name: "Futute Bass",
          teaser:
            "Woozy, detuned synthesizers, 7th chords, harsh basslines, syncopated percussion with fast-paced hi-hats and a melodic, carefree atmosphere.",
        },
        {
          name: "Glitch",
          teaser:
            "Uses abstract sound design and malfunctioning electronics—CD skips, data corruption, and hardware noise—as main compositional elements.",
        },
        {
          name: "House",
          teaser:
            "Large, hugely popular group of related Electronic Dance Music styles, initially developing from Disco in the early 1980s.",
        },
        {
          name: "Hypertechno",
          teaser:
            "Emerged in the 2020s by mixing fast tempos, prominent basslines, and hard-hitting drums derived from popular Techno with simplistic, catchy melodies and vocals, often influenced by 2000s Hard Dance, Eurodance and Electropop.",
        },
        {
          name: "IDM",
          teaser:
            "Emerged through the development of Electronic Dance Music idioms into a less club-oriented and more experimental direction, often incorporating unconventional sound design and complex rhythms.",
        },
        {
          name: "Illbient",
          teaser:
            "Combines Ambient soundscapes with Hip Hop drum patterns, breaks, and samples through the busy effect layering of Dub.",
        },
        {
          name: "Indietronica",
          teaser:
            "Leftfield or DIY approach characterised by simpler Pop-informed melodies, often incorporating vocals or live instrumentation alongside Electronic production.",
        },
        {
          name: "Moogsploitation",
          teaser:
            "Moog synthesizer-led music often associated with a wave of Novelty records in the 1960s and 1970s.",
        },
        {
          name: "Nightcore",
          teaser:
            "Based around the technique of speeding and pitching up already existing songs.",
        },
        {
          name: "Nu-Disco",
          teaser:
            "21st-century trend mixing modern, polished Electronic production with the aesthetics, structures, and lively, organic beats of 1970s and 1980s Disco.",
        },
        {
          name: "Space Ambient",
          teaser:
            "Flowing and relaxing synthesizer-based music derived from Progressive Electronic, often oriented around imagery of outer space.",
        },
        {
          name: "Synthwave",
          teaser:
            "Rooted in 1980s synth music, characterized by large, throbbing 'retro' synths and visual elements, often features upbeat percussion and/or epic, cinematic atmospheres.",
        },
        {
          name: "Techno",
          teaser:
            "Highly beat-driven, repetitive, and mechanical, typically featuring minimal chord variation and melodies, focuses on rhythms and timbral variety; generally produced for club environments.",
        },
        {
          name: "Trance",
          teaser:
            "Evolving, tension-building structures with rapid, minor arpeggios on top of a hypnotic, four-on-the-floor drum patterns at fast tempo around 130-150 BPM.",
        },
        {
          name: "Trip Hop",
          teaser:
            "Evokes a surreal, trippy, dreamy, and sometimes dark atmosphere with offbeat turntable scratches, light vocal melodies, and Hip Hop-influenced beats.",
        },
        {
          name: "UK Bass",
          teaser:
            "Broad form of Electronic Dance Music characterized by prominent bass/sub-basses, a deep, dark, airy, and mechanical sound derived from Dubstep, and eclectic production influenced by UK Funky, Juke/Footwork, Techno, and Breakbeat.",
        },
        {
          name: "UK Garage",
          teaser:
            "Shuffling rhythms and influences from sources including Contemporary R&B and Hip Hop, as well as many forms of Electronic.",
        },
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

  const handleGenreClick = () => {
    navigate("/genre");
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
          <div key={index}>
            <div
              className="genre-card"
              style={{
                flexDirection: expandedGenreIndex === index ? "column" : "row",
              }}
            >
              <img
                src={genre.image}
                alt={genre.name}
                className="genre-image"
                onClick={() => handleGenreClick(genre)}
              />
              <div className="genre-info">
                <h3
                  onClick={() => handleGenreClick(genre)}
                  style={{
                    textAlign: expandedGenreIndex === index ? "left" : "left",
                  }}
                >
                  {genre.name}
                </h3>{" "}
                <p style={{ textAlign: "left" }}>
                  {expandedGenreIndex === index
                    ? genre.description
                    : genre.description}
                </p>
                <button
                  className="show-subgenres"
                  onClick={() => toggleSubgenres(index)}
                  style={{
                    textAlign: expandedGenreIndex === index ? "center" : "left",
                    width: "100%",
                  }}
                >
                  {expandedGenreIndex === index
                    ? `Hide ${genre.subgenres.length} subgenres`
                    : `Show ${genre.subgenres.length} subgenres`}
                </button>
              </div>
            </div>
            {expandedGenreIndex === index && (
              <div className="subgenres-container">
                <h2>Subgenres:</h2>
                <ul className="subgenres-list">
                  {genre.subgenres.map((subgenre, subIndex) => (
                    <li key={subIndex}>
                      <div className="subgenre-item">
                        <strong>{subgenre.name}</strong>
                        <p>{subgenre.teaser}</p>
                      </div>
                    </li>
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
