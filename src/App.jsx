import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import Charts from "./pages/Charts";
import ExploreArtists from "./Pages/ExploreArtists";
import ExploreGenres from "./Pages/ExploreGenres";
import ExploreSubGenres from "./Pages/ExploreSubGenres";
import Genres from "./Pages/Genres";
import ExploreAlbum from "./Pages/ExploreAlbums";
import ExploreSong from "./Pages/ExploreSong";
import ExploreConcerts from "./Pages/ExploreConcerts";
import ArtistProfile from "./pages/ArtistProfile";
import "./Components/Firebase/Firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import Album from "./Pages/Album";
import Song from "./Pages/Song";

export default function App() {
  const auth = getAuth();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  useEffect(() => {
    const accountCreation = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true); // Set to true if user is authenticated
        localStorage.setItem("isAuth", "true");
      } else {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
      }
    });

    return () => accountCreation(); // Cleanup subscription on unmount
  }, [auth]);

  const privateRoutes = (
    <>
      <NavTop />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore-artists" element={<ExploreArtists />} />
        <Route path="/explore-genres" element={<ExploreGenres />} />
        <Route path="/explore-subgenres" element={<ExploreSubGenres />} />
        <Route path="/explore-albums" element={<ExploreAlbum />} />
        <Route path="/explore-songs" element={<ExploreSong />} />
        <Route path="/explore-concerts" element={<ExploreConcerts />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/album" element={<Album />} />
        <Route path="/song" element={<Song />} />
      </Routes>
    </>
  );

  const publicRoutes = (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginScreen
            setIsAuth={setIsAuth}
            setOnboardingComplete={setOnboardingComplete}
          />
        }
      />
      <Route
        path="/create-account"
        element={
          <CreateAccount setOnboardingComplete={setOnboardingComplete} />
        }
      />
      <Route
        path="/choose-genre"
        element={<ChooseGenre setOnboardingComplete={setOnboardingComplete} />}
      />
      <Route
        path="/finish-profile"
        element={
          <CompleteProfile setOnboardingComplete={setOnboardingComplete} />
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );

  // Allow authenticated users who haven't completed onboarding to see the onboarding routes
  return (
    <>
      <main>{isAuth && onboardingComplete ? privateRoutes : publicRoutes}</main>
    </>
  );
}
