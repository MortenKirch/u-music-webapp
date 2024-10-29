



export default function AlbumComp() 
  



  const Albumdata = ({ albumcover, albumtitle, releaseyear, artistname, rating, songs }) => {
  return (  
<div className="album-container">
<div className="album-header">
<img src={albumcover} alt="Album Cover" className="album-cover" />
 <div className="album-details">
<h2 className="album-title">{albumtitle}</h2>
<p className="album-meta">{releaseyear} - Artist: {artistname}</p>
 <p className="album-rating">Avg rating: {rating}</p>


 </div>


</div>


 <div className="album-songs">
  <h3>Songs</h3>
   {songs.map((song, index) => (
  <div key={index} className="song-item">
     <p className="song-title">{song.title}</p>
   <p className="song-duration">{song.duration}</p>
</div>
 ))}

 </div>

</div>


  );
  };