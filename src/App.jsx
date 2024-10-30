import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./Pages/LoginScreen";
import Explore from "./Pages/Explore";
import HomeScreen from "./Pages/HomeScreen";
import Profile from "./Pages/Profile";
import NavTop from "./Components/NavbarTop";
import Activity from "./Pages/Activity";
import Concert from "./Pages/Concert";
import ConcertsLandingPage from "./Pages/ConcertsLandingPage";
import Reviews from "./Pages/Reviews";
import Notifications from "./Pages/Notifications";
import NavbarBottom from "./Components/NavbarBottom";
import CreateAccount from "./Pages/CreateAccount";
import ChooseGenre from "./Pages/ChooseGenre";
import CompleteProfile from "./Pages/CompleteProfile";
import Charts from "./Pages/Charts";
import ExploreArtists from "./Pages/ExploreArtists";
import ExploreGenres from "./Pages/ExploreGenres";
import Genre from "./Pages/Genre";
import ExploreAlbum from "./Pages/ExploreAlbums";
import ExploreSong from "./Pages/ExploreSong";
import ArtistProfile from "./Pages/ArtistProfile";
import "./Components/Firebase/Firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import AlbumPage from "./Pages/AlbumPage";
import Song from "./Pages/Song";
import ReviewsForm from "./Components/ReviewsForm";

export default function App() {
  const auth = getAuth();
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  const [onboardingComplete, setOnboardingComplete] = useState(
    localStorage.getItem("onboardingComplete") === "true"
  );

  //makes a use effect to check if users are authenticated or not if not setIsAuth is false
  useEffect(
    () => {
      const accountCreation = onAuthStateChanged(auth, (user) => {
        console.log(isAuth);
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
    [auth]
  );

  const privateRoutes = (
    <>
      <NavTop />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/concert" element={<Concert />} />
        <Route
          path="/concerts-landing-page"
          element={<ConcertsLandingPage />}
        />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/profile"
          element={<Profile setOnboardingComplete={setOnboardingComplete} />}
        />
        <Route path="/explore-artists" element={<ExploreArtists />} />
        <Route path="/explore-genres" element={<ExploreGenres />} />
        <Route path="/explore-albums" element={<ExploreAlbum />} />
        <Route path="/explore-songs" element={<ExploreSong />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/song" element={<Song />} />
        <Route path="/album" element={<AlbumPage />} />
        <Route path="/ReviewsForm" element={<ReviewsForm />} />

        {/* makes sure that if a route doesnt exist you get thrown back to homepage "this instance its homeScreen"*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <NavbarBottom />
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
