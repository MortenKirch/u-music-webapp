import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import "./Components/Firebase/Firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function App() {
  const auth = getAuth();
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");
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

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/choose-genre" element={<ChooseGenre />} />
          <Route path="/finish-profile" element={<CompleteProfile/>} />
        </Routes>
      </main>
    </>
  );
}
