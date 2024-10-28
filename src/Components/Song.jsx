export default function SongComp() {
  const Song = ({ songcover, songtitle, songartist, songduration, rating }) => {  
  
  return (

<div className="song-container">
<img src={songcover} alt="Song cover" className="song-cover" />
<div className="song-details">
<p className="song-title">{songtitle</p>
<p className="song-artist">Artist: {songartist}</p>
<p className="song-duration">Duration: {songduration}</p>
<p className="song-rating">Rating: {rating} </p>


</div>

</div>


  );
};
