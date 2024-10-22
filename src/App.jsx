import "./App.css";
import { Routes, Route } from "react-router-dom";
// import NavBarTemp from "./Components/NavBarTemp";
import LoginScreen from "./pages/LoginScreen";
import Explore from "./Pages/Explore";
import HomeScreen from "./pages/HomeScreen";
import Profile from "./pages/Profile";
import NavTop from "./Components/NavbarTop";
import Concerts from "./pages/Concerts";
import Reviews from "./pages/Reviews";
import Notifications from "./pages/Notifications";
import NavbarBottom from "./Components/NavbarBottom";
import CreateAccount from "./Pages/CreateAccount";
import ChooseGenre from "./Pages/ChooseGenre";
import CompleteProfile from "./Pages/CompleteProfile";
import ExploreArtists from "./Pages/ExploreArtists";
import ExploreGenres from "./Pages/ExploreGenres";
import ExploreSubGenres from "./Pages/ExploreSubGenres";
import Genres from "./Pages/Genres";
import ExploreAlbum from "./Pages/ExploreAlbum";
import ExploreSong from "./Pages/ExploreSong";
import ExploreConcerts from "./Pages/ExploreConcerts";

/* EXPLORE SUBGENRES HALLØJ NÅR JEG KOMMER DERTIL */

function App() {
  return (
    <>
      <NavTop />

      <NavbarBottom />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/choose-genre" element={<ChooseGenre />} />
          <Route path="/finish-profile" element={<CompleteProfile />} />
          <Route path="/explore-artists" element={<ExploreArtists />} />
          <Route path="/explore-genres" element={<ExploreGenres />} />
          <Route path="/explore-subgenres" element={<ExploreSubGenres />} />
          <Route path="/explore-album" element={<ExploreAlbum />} />
          <Route path="/explore-song" element={<ExploreSong />} />
          <Route path="/explore-concerts" element={<ExploreConcerts />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
