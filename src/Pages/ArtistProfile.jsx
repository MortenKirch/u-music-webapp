import ArtistProfileAlbum from "../Components/ArtistProfileAlbums";
import ArtistProfileArtist from "../Components/ArtistProfileArtist";
import ArtistProfileSongs from "../Components/ArtistProfileSongs";

export default function ArtistProfile() {
  return (
    <div className="artist-profile-container">
      <ArtistProfileArtist />
      <ArtistProfileSongs />
      <ArtistProfileAlbum />
    </div>
  );
}
