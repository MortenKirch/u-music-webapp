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
import Genres from "./Pages/Genres";
import ExploreAlbum from "./Pages/ExploreAlbums";
import ExploreSong from "./Pages/ExploreSong";
import ExploreConcerts from "./Pages/ExploreConcerts";
import ArtistProfile from "./pages/ArtistProfile";
import "./Components/Firebase/Firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import Album from "./Pages/Album";

export default function App() {
  const auth = getAuth();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );
  const [onboardingComplete, setOnboardingComplete] = useState(false);
 //makes a use effect to check if users are authenticated or not if not setIsAuth is false
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

    return () => accountCreation(); // Cleanup accountCreating function
  }, //puts auth at the end to tell the function to run everytime auth is changed
  [auth]);

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
        <Route path="/explore-albums" element={<ExploreAlbum />} />
        <Route path="/explore-songs" element={<ExploreSong />} />
        <Route path="/explore-concerts" element={<ExploreConcerts />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/genres" element={<Genres />} />
         {/* makes sure that if a route doesnt exist you get thrown back to homepage "this instance its homeScreen"*/}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/album" element={<Album />} />
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
      {/* makes sure that if a route doesnt exist you get thrown back to homepage "this instance its login screen"*/}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );

  // makes a shorhand if statement that says that isAuth and onboardingComplete has to be true to acces
  // private routes if not you only have acces to public routes
  return (
    <>
      <main>{isAuth && onboardingComplete ? privateRoutes : publicRoutes}</main>
    </>
  );
}
