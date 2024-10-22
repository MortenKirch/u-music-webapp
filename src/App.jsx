import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBarTemp from "./Components/NavBarTemp";
import LoginScreen from "./pages/LoginScreen";
import Explore from "./pages/Explore";
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
      <NavBarTemp />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );

  const publicRoutes = (
    <Routes>
      <Route path="/login" element={<LoginScreen setIsAuth={setIsAuth} setOnboardingComplete={setOnboardingComplete} />} />
      <Route path="/create-account" element={<CreateAccount setOnboardingComplete={setOnboardingComplete} />} />
      <Route path="/choose-genre" element={<ChooseGenre setOnboardingComplete={setOnboardingComplete} />} />
      <Route path="/finish-profile" element={<CompleteProfile setOnboardingComplete={setOnboardingComplete}/>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );

  // Allow authenticated users who haven't completed onboarding to see the onboarding routes
  return (
    <>
      <main>

        {isAuth && onboardingComplete ? privateRoutes : publicRoutes}
      </main>
    </>
  );
}

